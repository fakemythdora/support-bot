const Discord = require("discord.js");
const os = require('os');
const { connection } = require('mongoose');

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("❌ | Bạn không có quyền để sử dụng lệnh này!");

    let arch = os.arch();
    let platform = os.platform();
    let shard = client.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;

    let a = new Discord.MessageEmbed()
    .setTitle(`Bot Stastics | v${require("../package.json").version}`)
    .setColor("WHITE")
    .addField('Architecture', `\`${arch}\``, true)
    .addField('Platform', `\`${platform}\``, true)
    .addField('Node-Version', `\`${NodeVersion}\``, true)
    .addField('Discord.js', `\`v${require("../package.json").dependencies["discord.js"]}\``, true)
    .addField('Shards', `\`${shard}\``, true)
    .addField('Cores', `\`${cores}\``, true)
    .addField('Database', `\`${switchTo(connection.readyState)}\``, true)
    .addField('Latency', `\`${Date.now() - message.createdTimestamp}ms\``, true)
    .addField('API Latency', `\`${Math.round(client.ws.ping)}ms\``, true)
    .addField('Memory', `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB\``, true)
    .addField("Uptime",`<t:${Math.floor(Date.now() / 1000 - client.uptime / 1000)}:R>`, true)
    .setTimestamp()
      message.channel.send({
        embeds: [a]
      });

};
function switchTo(val) {
  var status = " ";
  switch(val) {
    case 0 : status = `DISCONNECTED`
    break;
    case 1 : status = `CONNECTED`
    break;
    case 2 : status = `CONNECTING`
    break;
    case 3 : status = `DISCONNECTING`
    break;
  }
  return status;
}

exports.help = {
    name: 'stats',
    aliases: ['status', 'statistics'],
    description: 'Show bot statistics',
    usage: '=stats'
};

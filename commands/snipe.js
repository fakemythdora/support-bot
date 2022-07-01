const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("❌ | Bạn không có quyền để sử dụng lệnh này!");

  const embed1 = new MessageEmbed()
    .setDescription(`🤔 | Không tìm thấy tin nhắn đã xóa!`)
    .setColor("RED");

  const snipe = client.snipes.get(message.channel.id)

  if(!snipe) return message.reply({ embeds: [embed1] });

  const embedSniped = new MessageEmbed()
    .setTitle("Message Sniped!")
    .addFields(
      {
        name: "• Author:",
        value: `${snipe.author} (\`${snipe.author.id}\`)`
      },
      {
        name: "• Message:",
        value: `${snipe.content || "`[ERR - Probably an embed message was sent]`"}`
      },
    )
    .setColor(config.messages.embeds.colors.yes)
    .setTimestamp();
  
  if(snipe.image) embed.setImage(snipe.image);
  
  message.reply({ embeds: [embedSniped] });

};

exports.help = {
    name: 'snipe',
    aliases: ['sn'],
    description: 'Nhận tin nhắn đã xóa của user mới nhất',
    usage: '=snipe'
};
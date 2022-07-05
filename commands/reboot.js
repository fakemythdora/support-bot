const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    if (!client.config.OwnerID.includes(message.author.id)) {
        const nop = new MessageEmbed()
        .setColor("RED")
        .setDescription(`Xin lỗi, bạn không thể sử dụng lệnh này!`)
        return message.channel.send({embeds: [nop]})
      }
      try {
        message.channel.send({ embeds: [new MessageEmbed().setColor("GREEN").setDescription("Restarting Bot!")] });
          setTimeout(() => {
            process.exit();
          }, 2000);

          const masterLogger = client.channels.cache.get('986518047743442944');
          if (masterLogger) {
              await masterLogger.send({
                  embeds: [
                      new MessageEmbed()
                          .setTitle('Client Restarted')
                          .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
                          .setDescription(`**Actioned by** : ${message.author.tag}`)
                          .setColor('GREEN')
                          .setTimestamp(),
                  ],
              });
          }
      } catch (e) {
        console.log(String(e.stack).bgRed)
        const emesdf = new MessageEmbed()
        .setColor("RED")
        .setAuthor({ name: `An Error Occurred`})
        .setDescription(`\`\`\`${e.message}\`\`\``);
        return message.channel.send({embeds: [emesdf]});
      }

};

exports.help = {
    name: 'reboot',
    aliases: ['restart'],
    description: 'Restart the bot',
    usage: '=reboot'
};
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.name === "Helper")) return message.channel.send("❌ | Bạn không có quyền để sử dụng lệnh này!");

      const channel = message.mentions.channels.first();

      if(!channel) return message.reply("**Vui lòng mention một channel!**\nUsage: `=announce #channel <message>`")
      
      const content = args.slice(1).join(" ");

      if(!content) return message.reply("**Vui lòng cung cấp một message!**\nUsage: `=announce #channel <message>`")

      const embed = new MessageEmbed()
        .setTitle("New Accouncement:")
        .addFields(
          { name: "• Author:", value: `${message.author} (\`${message.author.id}\`)` },
          { name: "• Message:", value: content },
        )
        .setColor("#C2E8FF")
        .setTimestamp();

      const channelToSend = message.guild.channels.cache.find(ch => ch.id === channel.id);

      if(message.image) embed.setImage(message.image);

      channelToSend.send({ embeds: [embed] }).catch(e => console.log(e))

      const embedSent = new MessageEmbed()
        .setDescription(`**✅ | Sent complete! Check announce here: ${channelToSend}**`)
        .setColor("GREEN");

      message.reply({ embeds: [embedSent] });

};

exports.help = {
    name: 'announce',
    aliases: ['an', 'announc', 'announ', 'annc'],
    description: 'Announce something',
    usage: '=announce #channel <message>'
};
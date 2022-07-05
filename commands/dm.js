const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Helper")) return message.channel.send("❌ | Bạn không có quyền để sử dụng lệnh này!");

	    const embed1 = new MessageEmbed()
        .setDescription(`❌ | Vui lòng mention một user!`)
        .setColor("RED");

      const embed2 = new MessageEmbed()
        .setDescription(`❌ | Không thể tìm thấy user trong server!`)
        .setColor("RED");

      const embed3 = new MessageEmbed()
        .setDescription(`❌ | Vui lòng cung cấp một message!`)
        .setColor("RED");

      const embedError = new MessageEmbed()
        .setDescription(`❌ | Không thể dm cho user đó!`)
        .setColor("RED");
      
      if(!args[0]) return message.reply({ embeds: [embed1]});

      const user = message.mentions.members.first() ||  message.guild.members.cache.find(r => r.user.id === args[0]);
    
      if(!user) return message.reply({ embeds: [embed2]});
    
      const msg = args.slice(1).join(" ");

      if(!msg) return message.reply({ embeds: [embed3] });

      const embedDM = new MessageEmbed()
        .setTitle(`Bạn nhận được một tin nhắn từ ${message.guild.name}`)
        .addFields(
          {
            name: "• Author:",
            value: `${message.member} (\`${message.member.id}\`)`
          },
          {
            name: "• Message:",
            value: msg || "[ERR]"
          },
        )
        .setColor("#C2E8FF")
        .setTimestamp();

      const embed4 = new MessageEmbed()
        .setDescription(`✅ | Message sent to ${user} (\`${user.id}\`).`)
        .setColor("GREEN");

      user.send({ embeds: [embedDM] }).catch(() => message.reply({ embeds: [embedError] })).then(() => message.reply({ embeds: [embed4] }));

};

exports.help = {
    name: 'dm',
    aliases: ['dm'],
    description: 'DM một user',
    usage: '=dm @user <message>'
};
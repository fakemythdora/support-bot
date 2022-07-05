const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new MessageEmbed()
        .setTitle(message.guild.name + " - Member Count:")
        .setDescription(`Hiện tại đang có **${message.guild.memberCount} members** ở trong server!`)
        .addFields(
          {
            name: "• Humans:",
            value: `\`${message.guild.members.cache.filter(member => !member.user.bot).size || "ERR"}\``,
            inline: true
          },
          {
            name: "• Bots:",
            value: `\`${message.guild.members.cache.filter(member => member.user.bot).size || "ERR"}\``,
            inline: true
          },
        )
        .setTimestamp()
        .setColor("#C2E8FF");

      message.reply({ embeds: [embed] })

};

exports.help = {
    name: 'membercount',
    aliases: ['mc', 'memberc', 'members'],
    description: 'Hiển thị số lượng thành viên trên server này',
    usage: '=membercount'
};
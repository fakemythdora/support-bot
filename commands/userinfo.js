const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

    const member = message.mentions.members.first() || message.member;
        
      const embed = new MessageEmbed()
        .setTitle(`${member.user.tag}'s Information:`)
        .setColor("#C2E8FF")
        .setThumbnail(member.user.displayAvatarURL())
        .addField("• Full Name:", member.user.tag, true)
        .addField("• ID:", `${member.id}`, true)
        .addField(`• Avatar URL:`, `[Click Here](${member.user.displayAvatarURL()})`, true)
        .addField("• Joined Server At:", member.joinedAt.toDateString())
        .addField("• Joined Discord At:", member.user.createdAt.toDateString())
        .setFooter(message.member.displayName, message.author.displayAvatarURL(), true)
        .setTimestamp();

      message.reply({ embeds: [embed]});  

};

exports.help = {
    name: 'userinfo',
    aliases: ['useri', 'memberinfo', 'memberi'],
    description: 'Kiểm tra thông tin account của bạn hoặc account của ai đó khác',
    usage: '=userinfo @user'
};
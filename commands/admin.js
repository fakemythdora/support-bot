const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.name === "Helper")) return message.channel.send("❌ | Bạn không có quyền để sử dụng lệnh này!");
    

        let embedadmin = new MessageEmbed()
            .setColor('#FFFFFF')	
            .setTitle('Command List')
            .setDescription("**Normal Commands**\n`suggest`: Tạo ra một suggest\n`feedback`: Tạo ra một feedback\n`membercount`: Show the number of members on this server\n`roleinfo`: Check a role's information\n`serverinfo`: Check the server information\n`userinfo`: Check your account's information, or someone else's account information\n\n**Staff Commands**\n`faq`: Starsky Frequently Asked Questions (Onwer Only) \n`addRole`: Add role cho một người nào đó\n`removeRole`: Remove role cho một người nào đó\n`resetDatabase`: Reset Database (Owner Only)\n`announce`: Announce something\n`dm`: DM một user\n`eval`: Evaluate something (Owner only)\n`purge`: Clear an amount of messages\n`slowmode`: Sets the channel's slowmode\n`snipe`: Get the latest user's deleted message")
            .setTimestamp()
        
    return message.channel.send({ embeds: [ embedadmin ] })

};

exports.help = {
    name: 'admin',
    aliases: ['admincmds', 'admincommands', 'adcmd', 'ad', 'adcmds'],
    description: 'List tất cả các lệnh',
    usage: ''
};
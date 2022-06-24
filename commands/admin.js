const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("❌ | Bạn không có quyền để sử dụng lệnh này!");
    

        let embedadmin = new MessageEmbed()
            .setColor('#FFFFFF')	
            .setTitle('Command List')
            .setDescription("**Normal Commands**\n`suggest`: Tạo ra một suggest\n`feedback`: Tạo ra một feedback\n\n**Normal Commands**\n`faq`: Starsky Frequently Asked Questions (Onwer Only) \n`addRole`: Add role cho một người nào đó\n`removeRole`: Remove role cho một người nào đó\n`resetDatabase`: Reset Database (Owner Only)")
            .setTimestamp()
        
    return message.channel.send({ embeds: [ embedadmin ] })

};

exports.help = {
    name: 'admin',
    aliases: ['admincmds', 'admincommands', 'adcmd', 'ad', 'adcmds'],
    description: 'List tất cả các lệnh',
    usage: ''
};
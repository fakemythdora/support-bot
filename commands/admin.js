const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.name === "Helper")) return message.channel.send("❌ | Bạn không có quyền để sử dụng lệnh này!");
    

        let embedadmin = new MessageEmbed()
            .setColor('#FFFFFF')	
            .setTitle('Command List')
            .setDescription("**Normal Commands**\n`suggest`: Tạo ra một suggest\n`feedback`: Tạo ra một feedback\n`membercount`: Hiển thị số lượng thành viên trên server này\n`roleinfo`: Kiểm tra thông tin của role\n`serverinfo`: Kiểm tra thông tin của server\n`userinfo`: Kiểm tra thông tin account của bạn hoặc account của ai đó khác\n\n**Staff Commands**\n`faq`: Starsky Frequently Asked Questions (Onwer Only) \n`addRole`: Add role cho một người nào đó\n`removeRole`: Remove role cho một người nào đó\n`resetDatabase`: Reset Database (Owner Only)\n`announce`: Announce something\n`dm`: DM một user\n`eval`: Evaluate something (Owner only)\n`purge`: Xóa một lượng tin nhắn\n`slowmode`: Sets the channel's slowmode")
            .setTimestamp()
        
    return message.channel.send({ embeds: [ embedadmin ] })

};

exports.help = {
    name: 'admin',
    aliases: ['admincmds', 'admincommands', 'adcmd', 'ad', 'adcmds'],
    description: 'List tất cả các lệnh',
    usage: ''
};
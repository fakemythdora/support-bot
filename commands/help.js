const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

        let embed = new MessageEmbed()
            .setColor('#FFFFFF')	
            .setTitle('Command List')
            .setDescription("`suggest`: Tạo ra một suggest\n`feedback`: Tạo ra một feedback\n`membercount`: Hiển thị số lượng thành viên trên server này\n`roleinfo`: Kiểm tra thông tin của role\n`serverinfo`: Kiểm tra thông tin của server\n`userinfo`: Kiểm tra thông tin account của bạn hoặc account của ai đó khác")
            .setTimestamp()
        
            return message.channel.send({ embeds: [ embed ] })

};

exports.help = {
    name: 'help',
    aliases: ['h'],
    description: 'List tất cả các lệnh',
    usage: '=help'
};

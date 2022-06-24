const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

        let embed = new MessageEmbed()
            .setColor('#FFFFFF')	
            .setTitle('Command List')
            .setDescription("`suggest`: Tạo ra một suggest\n`feedback`: Tạo ra một feedback")
            .setTimestamp()

        let embedadmin = new MessageEmbed()
            .setColor('#FFFFFF')	
            .setTitle('Command List')
            .setDescription("`suggest`: Tạo ra một suggest\n`feedback`: Tạo ra một feedback\n\n`faq`: Starsky Frequently Asked Questions \n`addRole`: Add role cho một người nào đó\n`removeRole`: Remove role cho một người nào đó\n`resetDatabase`: Reset Database (Chỉ dành cho owner)")
            .setTimestamp()
        
            return message.channel.send({ embeds: [ embed ] })

};

exports.help = {
    name: 'help',
    aliases: ['h'],
    description: 'List tất cả các lệnh',
    usage: ''
};
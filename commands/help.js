const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

        let embed = new MessageEmbed()
            .setColor('#FFFFFF')	
            .setTitle('Command List')
            .setDescription("`suggest`: Tạo ra một suggest\n`feedback`: Tạo ra một feedback")
            .setTimestamp()
        
            return message.channel.send({ embeds: [ embed ] })

};

exports.help = {
    name: 'help',
    aliases: ['h'],
    description: 'List tất cả các lệnh',
    usage: '=help'
};
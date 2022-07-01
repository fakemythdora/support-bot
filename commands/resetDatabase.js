const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!client.config.OwnerID.includes(message.author.id)) {
        const nop = new MessageEmbed()
        .setColor("RED")
        .setDescription(`Xin lỗi, bạn không thể sử dụng lệnh này!`)
        return message.channel.send({embeds: [nop]})
    }

    client.calls.removeGuild(message.guild.id)
    client.calls.insertGuild(message.guild.id)

};

exports.help = {
    name: 'resetDatabase',
    aliases: ['resetdatabase', 'resetdata'],
    description: 'Reset Database (Owner Only)',
    usage: ''
};
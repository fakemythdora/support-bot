const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (message.author.id != '897838071922446466') return;

    client.calls.removeGuild(message.guild.id)
    client.calls.insertGuild(message.guild.id)

};

exports.help = {
    name: 'resetDatabase',
    aliases: ['resetdatabase'],
    description: 'Reset the database.',
    usage: ''
};
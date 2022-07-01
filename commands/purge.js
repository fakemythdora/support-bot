const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");
const wait = require('node:timers/promises').setTimeout;

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("❌ | Bạn không có quyền để sử dụng lệnh này!");

        const embed1 = new MessageEmbed()
        .setDescription(`❌ | Vui lòng ghi rõ số lượng!`)
        .setColor("RED")

        const embed2 = new MessageEmbed()
        .setDescription(`❌ | Số lượng không được âm hoặc quá **99**!`)
        .setColor("RED")

        const embedError = new MessageEmbed()
        .setDescription(`❌ | Không thể xóa tin nhắn đã được gửi 14 ngày trước!`)
        .setColor("RED")

        const amount = parseInt(args[0])

        if (!amount) return message.reply({ embeds: [embed1] })

        if (amount > 99 || amount < 1) return message.reply({ embeds: [embed2] })

        message.channel.bulkDelete(amount + 1).catch(err => { message.reply({ embeds: [embedError] }) }).then(() => {
        
        const embedDone = new MessageEmbed()
            .setDescription(`✅ | Thành công xóa **${amount} messages** trong \`${client.ws.ping}\` ms.`)
            .setColor("GREEN");

        message.channel.send({ embeds: [embedDone] }).then(async msg => {
            await wait(5000);
            msg.delete().catch(() => { });
        });
  
})

};

exports.help = {
    name: 'purge',
    aliases: ['sw', 'sweep', 'cl', 'clear', 'p'],
    description: 'Xóa một lượng tin nhắn',
    usage: '=purge <amount>'
};
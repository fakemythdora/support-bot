    exports.run = async (client, message, args) => {

        if (!client.config.OwnerID.includes(message.author.id)) {
            const nop = new MessageEmbed()
            .setColor("RED")
            .setDescription(`Xin lỗi, bạn không thể sử dụng lệnh này!`)
            return message.channel.send({embeds: [nop]})
        }

        try {
        
        const code = args.join(" ");
        
        if (!code) {
          let embedMissingEvaluation = new MessageEmbed()
            .setDescription("Please provide something to evaluate!")
            .setColor(config.messages.embeds.colors.no);
          
          return message.reply({ embeds: [embedMissingEvaluation] });
        }
          
        let evaled = eval(code).catch(e => console.log(e));
  
        if (typeof evaled !== "string")
          
        evaled = require("util").inspect(evaled)
  
        let embedEvaluated = new MessageEmbed()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
          .setTitle("Evaluation Done!")
          .addField("• Input:", `\`\`\`${code}\`\`\``)
          .addField("• Output:", `\`\`\`${evaled}\`\`\``)
          .setColor(config.messages.embeds.colors.yes);
  
        message.reply({embeds: [embedEvaluated]});
        
        } catch (err) {
        
          let embedEvaluationError = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Evaluation Failed.")
            .addField("• Error:", `\`\`\`${err}\`\`\``)
            .setColor(config.messages.embeds.colors.error);
  
          message.reply({embeds: [embedEvaluationError]});
        
      }

    };
    
exports.help = {
    name: 'eval',
    aliases: ['evaluate', 'ev'],
    description: 'Evaluate something',
    usage: '=evaluate <code>'
};
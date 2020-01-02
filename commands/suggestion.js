const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let exampleEmbed = new Discord.RichEmbed()
        .setColor('#f54242')
        .setTitle(args.join(' '))
      	.setDescription('React with ✅ if you agree or ❌ if you disagree.')
        .addField('**Suggested by **', message.author)
        .setFooter('Bots made by Mad Drift', 'https://i.imgur.com/gT7QfxH.png')
        .setTimestamp()
    
    let channel = message.guild.channels.find(`name`, "suggestions");
    if(!channel) return message.channel.send("Can't find suggestions channel.");
    
    message.delete().catch(O_o=>{});
    channel.send(exampleEmbed).then(embedMessage => {
    embedMessage.react("✅");
    embedMessage.react("❌")
    })   
}

module.exports.help = {
    name:"suggest"
  }
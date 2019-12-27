const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


module.exports.run = async (bot, message, args) => {

bot.on('message', (message) => {
    if (message.content === '!restart') {
    const exampleEmbed = new Discord.RichEmbed()
            .setColor('#f54242')
            .setTitle('**__Bot restart:__**')
            .setDescription('**The bot has successfully restarted**')
            .addField('Requested by:', message.author)
            .setThumbnail(message.author.displayAvatarURL)
            .setFooter('Bots made by Wjaas', 'https://i.imgur.com/CXI19Xn.png')
            .setTimestamp()  
    message.channel.send(exampleEmbed).then(() => {
    process.exit(1);
  })
  }
  });

}
  module.exports.help = {
    name:"restart"
  }
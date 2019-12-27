const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#f54242")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .setFooter('Bots made by Wjaas', 'https://i.imgur.com/CXI19Xn.png');

    message.delete().catch(O_o=>{});
    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#f54242")
    .setThumbnail(message.guild.iconURL)
    .setTitle('**__Serverinfo: ' + message.guild.name + '__**')
    .addField("Name", message.guild.name)
    .addField("ID", message.guild.id)
    .addField("Owner", message.guild.owner)
    .addField("Region", message.guild.region)
    .addField("Members", `${message.guild.memberCount}`)
    .addField("Roles", message.guild.roles.size)
    .addField("Channels", message.guild.channels.size)
    .addField("You Joined", message.member.joinedAt)
    .addField("Discord created:", message.guild.createdAt)
    .setFooter('Bots made by Wjaas', 'https://i.imgur.com/CXI19Xn.png')
    .setTimestamp()

    message.delete().catch(O_o=>{});
    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#f54242")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason)
    .setFooter('Bots made by Mad Drift', 'https://i.imgur.com/gT7QfxH.png');

    let incidentchannel = message.guild.channels.find(`name`, "bans-and-kicks");
    if(!incidentchannel) return message.channel.send("Can't find bans-and-kicks channel.");

    message.delete().catch(O_o=>{});
    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}

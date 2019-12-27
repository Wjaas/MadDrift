
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.content.startsWith("!say")) {
        // Get the channel mention
        if (message.mentions.channels.size == 0) {
            message.reply("please mention a channel first.");
            message.delete().catch(O_o=>{});
        }
        else {
            let targetChannel = message.mentions.channels.first();
            // Get the message to print
  
            let args = message.content.split(" ").slice(2);
            let saytext = args.join(" ");
            targetChannel.send(saytext);
            message.delete();
        }
  }
}

module.exports.help = {
    name:"say"
  }
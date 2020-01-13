const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.on("ready", async () => {
  bot.user.setStatus('dnd'); 
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers with ${bot.users.size} members!`);
  bot.user.setActivity(` ${guild.memberCount} people`, { type: 'WATCHING' });

});


bot.on('guildMemberAdd', member => {
  member.addRole(member.guild.roles.find(role => role.name === "Member"));
const exampleEmbed = new Discord.RichEmbed()
 .setThumbnail(member.user.displayAvatarURL)    
 .setColor('#f54242')
 .setTitle('New member!')
   .setDescription('Welcome to **' + member.guild.name + ', ' + member.user + '!**')
   .addField('***Tip:***', 'Remember to read ' + `<#628009813577826314>` + ' before you enter the server!' + ' Enjoy your stay!')
 .setFooter('Bots made by Mad Drift', 'https://i.imgur.com/gT7QfxH.png')
 .setTimestamp()


member.guild.channels.get('571032564320567329').send(exampleEmbed);
})






// Server stats below --------------------------------------------------------
const serverStats = {
  guildID: '555749267667550251',
  totalUsersID: '661764105170059285',
};

bot.on('guildMemberAdd', member => {
  if (member.guild.id !== serverStats.guildID) return;
  bot.channels.get(serverStats.totalUsersID).setName(`📊 Members: ${member.guild.memberCount}`);
});

bot.on('guildMemberRemove', member => {
  if (member.guild.id !== serverStats.guildID) return;
  bot.channels.get(serverStats.totalUsersID).setName(`📊 Members: ${member.guild.memberCount}`);
});

// Ping Element Below / Just to check if bot works -------------------------------
bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

// Anti invite below --------------------------------------------------------------
bot.on(`message`, async message => {
  const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
  try {
      if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
          if (message.author.id === message.guild.ownerID) return;
          await message.delete();
          await message.channel.send(`${message.author} **DO NOT** send invites to other Discord servers. Someone will probably beat you up`);
      }
  } catch (e) {
      console.log(e);
  }
});

 
bot.login(tokenfile.token);
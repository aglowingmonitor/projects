const discord = require('discord.js');
const logsystem = require("../logsomething.js");
const settings = require("../storage/guildConf.json");
const modAction = require("../models/modaction.js");


module.exports.run = async(bot, message, args) =>{
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Cannot find the user specified.");
    let kReason = args.join(" ").slice(args[0].length);
    //if(!kUser === message.guild.members.get(args[0])){
    //    kReason.slice(22);
    //    kReason.slice(args[0].length)
    //}
    console.warn("Hello");
    console.warn(kUser);
    if(!message.member.roles.has(settings[message.guild.id].modrole) || !message.member.roles.has(settings[message.guild.id].adminrole) || !message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have the sufficient permissions to do so");
    if(message.guild.member(message.mentions.users.first() == message.author)) return message.channel.send("You can't kick yourself!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That user couldn't be kicked.");
    
    let kickEmbed = new discord.RichEmbed()
    .setDescription("-Kick-")
    .setColor("#bf0a0a")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `${message.author} with ID ${message.author.id}`)
    .addField("Reason", kReason)
    .addField("Kicked at", message.createdAt);
            
    let kickChannel = message.guild.channels.find(`name`, `fucking-logs-in-here-james`);
    if(!kickChannel) return message.channel.send("Couldn't find log channel.");
    
    //message.guild.member(kUser).kick(kReason);
    message.delete().catch(O_o=>{});
    message.channel.send(`✅ **_Successfully kicked ${kUser}. ${kReason}_**`);
    kickChannel.send(kickEmbed);  
}

module.exports.help = {
    name: "kick"
}
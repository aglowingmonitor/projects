const discord = require('discord.js');
const settings = require("../storage/guildConf.json");
const logsystem = require("../logsomething.js");
const modAction = require("../models/modaction.js");

module.exports.run = async(bot, message, args) =>{
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Cannot find the user specified.");
    let bReason = args.join(" ").slice(args[0].length);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You are not authorised to ban someone!!!!");
    if(message.guild.member(message.mentions.users.first() == message.author)) return message.channel.send("You can't ban yourself!");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That user couldn't be banned.");
        
    let banEmbed = new discord.RichEmbed()
    .setDescription("-Ban-")
    .setColor("#bf0a0a")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `${message.author} with ID ${message.author.id}`)
    .addField("Reason", kReason)
    .addField("Banned at", message.createdAt);
                
    let banChannel = message.guild.channels.find(`name`, `fucking-logs-in-here-james`);
    if(!banChannel) return message.channel.send("Couldn't find log channel.");
        
   // message.guild.member(bUser).ban(bReason);
    message.delete().catch(O_o=>{});
    message.channel.send(`✅ **_Successfully banned ${bUser}. ${bReason}_**`);
    kickChannel.send(banEmbed);
}

module.exports.help = {
    name: "ban"
}
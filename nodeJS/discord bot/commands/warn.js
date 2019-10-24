const discord = require('discord.js');
const fs = require("fs");
const Warn = require("../models/modaction.js");
const mongoose = require("mongoose");
const warnCounter = require("../storage/warnings.json");
const logsystem = require("../logsomething.js");
const settings = require("../storage/guildConf.json");

const casecounter = 1;

module.exports.run = async(bot, message, args) =>{
    mongoose.connect('mongodb://localhost/Warns');
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are missing permission: Manage Messages")
    if(!wUser) return message.reply("Couldn't find user specified");
    let reason = args.join(" ").slice(22);

    //Increase the counter by 1
    if(!warnCounter[message.guild.id]){
        warnCounter[message.guild.id] = {
            casenumber: parseInt(warnCounter.casenumber+1)
        }
        fs.writeFile("./storage/warnings.json", JSON.stringify(warnCounter, null, 2), (err)=>{
            if(err) console.warn(`Severe Error: ${err}`);
        })
    }else{
        warnCounter[message.guild.id] = {
            casenumber: parseInt(warnCounter[message.guild.id].casenumber+1)
        }
        fs.writeFile("./storage/warnings.json", JSON.stringify(warnCounter, null, 2), (err)=>{
            if(err) console.warn(`Severe Error: ${err}`);
        })
    }
    

    const warn = new Warn({
        _id: mongoose.Types.ObjectId(),
        action: "Warn",
        username: wUser.username,
        userID: wUser.id,
        reason: reason,
        doneBy: message.author.username,
        time: message.createdAt,
        caseID: warnCounter[message.guild.id].casenumber,
        serverID: message.guild.id
    });
    warn.save()
    .then(result=> console.log(result))
    .catch(err=>console.log(err));

    let boticn = bot.user.displayAvatarURL;
    let warnsuccessembed = new discord.RichEmbed()
    .setAuthor(`Warn`, boticn)
    .setFooter("Case ID: "+`${warnCounter[message.guild.id].casenumber}`)
    .setColor("#2d7dfc")
    .addField("Warned", wUser || wUser.username)
    .addField("Reason", reason);
    message.channel.send(warnsuccessembed)
    logsystem.run(bot, message, "general", "warn", wUser || wUser.username, reason, message.author.username, warnCounter[message.guild.id].casenumber, message.createdAt)

    try{
        let warndm = new discord.RichEmbed()
        .setAuthor(`Warn - ${message.guild.name}`, boticn)
        .setFooter("Case ID: "+`${warnCounter[message.guild.id].casenumber}`)
        .setColor("#2d7dfc")
        .addField("Reason", reason);
        wUser.send(warndm)
    }catch(e){
        message.channel.send("Could not send message to user. Have they got the bot blocked?")
    }
    
    

}

module.exports.help = {
    name: "warn"
}
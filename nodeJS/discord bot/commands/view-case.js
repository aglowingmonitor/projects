const discord = require('discord.js');
const fs = require("fs");
const Warns = require("../models/modaction.js");
const settings = require("../storage/guildConf.json");


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:0/Warns",{
    useNewUrlParser: true
});

module.exports.run = async(bot, message, args) =>{
    mongoose.connect('mongodb://localhost/Warns');
    let casetosearch = args.join(" ");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are missing permission: Manage Messages")
    

    Warns.findOne({
        serverID: message.guild.id,
        caseID: casetosearch
    }, (err, warning)=>{
        if(err) console.log(err);

        let boticn = bot.user.displayAvatarURL;
        let embed = new discord.RichEmbed()
        .setAuthor(`Case Viewer`, boticn)
        if(!warning){
            embed.addField("Could not find ID mentioned", casetosearch);
            return message.channel.send(embed);
        }else{
            embed.setAuthor(`Mod Action`, boticn)
            embed.addField("Case ID", warning.caseID)
            embed.addField("Action", warning.action)
            embed.addField("Preformed by", warning.doneBy)
            embed.addField("Reason", warning.reason);
            return message.channel.send(embed);
        }
        //.setFooter("Case ID: "+`${warnCounter[message.guild.id].casenumber}`)
        //.setColor("#2d7dfc")
        //.addField("Warned", wUser || wUser.username)
        //.addField("Reason", reason);
    })

    
    

}

module.exports.help = {
    name: "view-case"
}
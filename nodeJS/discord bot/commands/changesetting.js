const discord = require('discord.js');
const fs = require("fs");
const settings = require("../storage/guildConf.json");
const logsystem = require("../logsomething.js");
//logsystem.run(bot, message, "settingschange", "Changed a setting", args[0], `<#${args[1]}>`, message.author.username, message.createdAt)

function bruh(settings){
    try{
        fs.writeFileSync("./storage/guildConf.json", JSON.stringify(settings, null, 2), (err) =>{
            if(err){
                console.log(err);
            } else{
                console.log("Settings file appended successfully.");
            }
        });
    } catch(e){
        console.warn(`Severe Error: ${e}`)
        let errorembed = new discord.RichEmbed()
        .setTitle("An error has occured")
        .setFooter("JSBot Version 1.1")
        .setColor("#e63b25")
        .addField("Error", e);
        message.channel.send(errorembed);
    }
    
}

module.exports.run = async(bot, message, args) =>{
    console.log("change settings initiated");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Missing permissions: Admin");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Missing permissions: Administrator");
    if(!args[0] || !args[1]) return message.reply(`Usage: ${settings.prefix}changesetting <modrole, adminrole, prefix> <text>`);
    //let settings = JSON.parse(fs.readFileSync("../server_settings.json", "utf8"));
    //let settings = JSON.parse(fs.readFileSync("./storage/guildConf.json", "utf8"));

    if(args[0] == "prefix"){
        settings[message.guild.id] = {
            prefix: args[1],
            logschannel: settings[message.guild.id].logschannel,
            welcomemessagechannel: settings[message.guild.id].welcomemessagechannel,
            modrole: settings[message.guild.id].modrole,
            adminrole: settings[message.guild.id].adminrole,
            joinmessage: settings[message.guild.id].joinmessage,
            leavemessage: settings[message.guild.id].leavemessage,
            banmessage: settings[message.guild.id].banmessage
        };
        message.reply(`Successfully set prefix to: ${args[1]}`)
        bruh(settings);
        logsystem.run(bot, message, "settingschange", "Changed a setting", args[0], args[1], message.author.username, null, message.createdAt)
    
    } if(args[0] == "logs"){
        let intthing = false;
        settings[message.guild.id] = {
            prefix: settings[message.guild.id].prefix,
            logschannel: args[1],
            welcomemessagechannel: settings[message.guild.id].welcomemessagechannel,
            modrole: settings[message.guild.id].modrole,
            adminrole: settings[message.guild.id].adminrole,
            joinmessage: settings[message.guild.id].joinmessage,
            leavemessage: settings[message.guild.id].leavemessage,
            banmessage: settings[message.guild.id].banmessage
        };
        if(parseInt(args[1])){
            message.reply(`Successfully set logs channel to: <#${args[1]}>`)
        }else{
            message.reply(`Successfully set logs channel to: ${args[1]}`)
        }
        bruh(settings);
        logsystem.run(bot, message, "settingschange", "Changed a setting", args[0], `<#${args[1]}>`, message.author.username, null, message.createdAt)
    }
    
    // fs.appendFile("../server_settings.json", JSON.stringify(settings), (err) =>{
    //     if(err){
    //         console.log(err)
    //     } else{
    //         console.log("Settings file appended successfully.")
    //     }
    // });
}

module.exports.help = {
    name: "changesetting"
}
//logsystem.run("general", "Description of the thing", args[1] (or something else), message.author.username, message.createdAt)

const discord = require('discord.js');
const settings = require("./storage/guildConf.json");

module.exports.run = async(bot, message, logtype, logaction, involved, extrainfo, creator, cNumber, timedone) =>{
    const modactioncolor = "#e63b25";
    const generallogcolor = "#42c5f5";
    const warncolor = "#e09722";
    const settings_logchannel = settings[message.guild.id].logschannel || "0";

    console.log(settings_logchannel);
    let log_channel = message.guild.channels.find(`name`, settings_logchannel) || message.guild.channels.find(`id`, settings_logchannel);
    if(!log_channel) return message.channel.send("Couldn't find log channel. Have you set it up with ``.changesettings logs``?");

    //Embed handling happens here
    if(logtype == "general" && logaction == "warn"){
        let logembed = new discord.RichEmbed()
        .setTitle("Warn")
        .setFooter("JSBot Version 1.1")
        .setColor(warncolor)
        .addField("Warned", involved)
        .addField("Reason", extrainfo)
        .addField("Preformed by", creator)
        .addField("Case Number", cNumber)
        .addField("Timestamp", timedone)
        //Sending the final embed to the log channel
        return log_channel.send(logembed);
    
    } if(logtype == "general"){
        let logembed = new discord.RichEmbed()
        .setFooter("JSBot Version 1.1")
        .setColor(generallogcolor)
        .addField(logaction, involved)
        .addField("Done by", creator)
        .addField("Timestamp", timedone)
        //Sending the final embed to the log channel
        return log_channel.send(logembed);
    
    } if(logtype == "settingschange"){
        let logembed = new discord.RichEmbed()
        .setFooter("JSBot Version 1.1")
        .setColor(generallogcolor)
        .setTitle("Settings change")
        .addField("Changed setting", involved)
        .addField("New setting", extrainfo)
        .addField("Done by", creator)
        .addField("Timestamp", timedone)
        //Sending the final embed to the log channel
        return log_channel.send(logembed);
    
    }if(logtype == "mod_action"){
        let logembed = new discord.RichEmbed()
        .setTitle(logaction)
        .setFooter("JSBot Version 1.1")
        .setColor(modactioncolor)
        .addField("Involved", involved)
        .addField("Reason", extrainfo)
        .addField("Preformed by", creator)
        .addField("Timestamp", timedone)
        //Sending the final embed to the log channel
        return log_channel.send(logembed);
    }
}

module.exports.help = {
    name: "logsystem"
}
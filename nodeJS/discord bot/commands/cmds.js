const discord = require('discord.js');
const settings = require("../storage/guildConf.json");


module.exports.run = async(bot, message, args) =>{
    let prefix = settings[message.guild.id].prefix;
    let msgembed = new discord.RichEmbed()
    .setDescription("**Commands**")
    .setColor("#2d7dfc")
    .addField("Current prefix", prefix)
    .addField("Kick", "Usage: "+`${prefix} kick {person} you did a bad`)
    .addField("Ban", "Usage: "+`${prefix} ban {person} you did a bad`)
    .addField("Mute", "Usage: "+`${prefix} mute {person} {time} rethink your bad action`)
    .addField("Warn", "Usage: "+`${prefix} warn {person} i do not like you`)
    .addField("Info", "Usage: "+`${prefix} info`)
    .addField("Suggest", "Usage: "+`${prefix} suggest {something witty}.`)
    .addField("Report", "Usage: "+`${prefix} report {person} parked in the bus bays with a coach.`+"\nNote this command literally does nothing it's a joke");

    return message.channel.send(msgembed);
}

module.exports.help = {
    name: "cmds"
}
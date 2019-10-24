const discord = require('discord.js');
const fs = require("fs");

module.exports.run = async(bot, message, args) =>{
    console.log("change settings initiated");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Missing permissions: Admin");
    //let settings = JSON.parse(fs.readFileSync("../server_settings.json", "utf8"));
    let settings = JSON.parse(fs.readFileSync("./storage/guildConf.json", "utf8"));
    if(!settings[message.guild.id]){
        message.reply("No settings?");
    }
    console.log(toString(settings[message.guild.id]));
    message.reply(`Current settings: ${toString(settings)}`);
}

module.exports.help = {
    name: "displaysettings"
}
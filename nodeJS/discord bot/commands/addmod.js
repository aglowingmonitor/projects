const discord = require('discord.js');
const settings = require("../storage/guildConf.json");
const logsystem = require("../logsomething.js");

module.exports.run = async(bot, message, args) =>{
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Missing permission: Administrator");
    let addMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!addMember) return message.reply("Couldn't find the user mentioned.");

    let role = "Redacted"
    let gRole = message.guild.roles.find(`id`, role);
    if(!gRole) return message.reply("Mod role doesn't exist?");

    if(!addMember.roles.has(gRole.id));
    try{
        await(addMember.addRole(gRole.id));
        message.reply("Moderator role has been successfully removed")
    }catch(e){
        message.channel.send("An error occured trying to add the role.");
    }
    


}

module.exports.help = {
    name: "removemod"
}
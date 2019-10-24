const discord = require('discord.js');
const ms = require("ms");

module.exports.run = async(bot, message, args) =>{
    //!mute @user [time]s/m/h/d

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //let user = client.users.get("username", tomute);
    //let user = discord.fetchUser(args[0]);
    //let user = message.guild.members.get(args[0]) || tomute;
    console.log(user);
    if(!user) return message.reply("Couldn't find the user.");
    if(user.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute this person.");
    let muterole = message.guild.roles.find(`name`, `Muted`);
    if(!muterole){ //Bruh the role didn't exist lets create it
        try{
            muterole = await message.guild.createRole({ //Creating the muted role
                name: "Muted",
                color: "#6b6b6b",
                permissions: []
            })
            message.guild.channels.forEach(async (channel,id) => { //Shoving the perms in all the channels:tm:
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            })
        }catch(e){
            console.log(e.stack);
        }
    }
    //end of nonexistant mute role!
    let mutetime = args[1];
    console.log(mutetime);
    let mutereason = args.join(" ").slice(args[0].length).slice(args[1].length);
    if(!mutetime) return message.reply("No time was specified.")
    await(user.addRole(muterole.id));
    message.reply(`✅**_${user} has been muted for ${ms(ms(mutetime))}. ${mutereason}_**`)
    //tomute.send(`You have been muted for ${mutetime}. ${mutereason}`);

    let muteEmbed = new discord.RichEmbed()
    .setDescription("-Mute-")
    .setColor("#bf0a0a")
    .addField("Muted User", `${user} with ID ${user.id}`)
    .addField("Muted By", `${message.author} with ID ${message.author.id}`)
    .addField("Reason", mutereason)
    .addField("Duration", ms(ms(mutetime)))
    .addField("Muted at", message.createdAt);
    
    let logChannel = message.guild.channels.find(`name`, `fucking-logs-in-here-james`);
    if(!logChannel) return message.channel.send("Couldn't find log channel.");

    message.delete().catch(O_o=>{});
    logChannel.send(muteEmbed);  

    

    setTimeout(function(){
        user.removeRole(muterole.id);
    }, ms(mutetime));

}

module.exports.help = {
    name: "mute"
}
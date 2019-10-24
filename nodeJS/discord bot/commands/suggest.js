const discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
    let origUser = message.author
    if(!origUser) return message.channel.send("Username is nil?")

    console.log(origUser);
    let description = args.join(" ")
    let suggestEmbed = new discord.RichEmbed()
    .setDescription("Suggestion")
    .setColor("#2d7dfc")
    .setThumbnail(message.author.avatarURL)
    .addField(`Suggested by: `,`${message.author}`)
    .addField(`Suggestion:`, `${description}`);
    console.log(description)
    let suggestchannel = message.guild.channels.find(`name`, `suggestions`);
    if(!suggestchannel) return message.channel.send("Couldn't find suggestions channel.");

    message.delete().catch(O_o=>{});
    suggestchannel.send(suggestEmbed).then(function(message){
        message.react("✅");
        message.react("❌");
    })
        
}

module.exports.help = {
    name: "suggest"
}
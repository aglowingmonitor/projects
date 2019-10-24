const discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");

    let reason = args.join(" ").slice(22);
    let reportEmbed = new discord.RichEmbed()
    .setDescription("Report")
    .setColor("#2d7dfc")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Reason", `${reason}`);

    let reportchannel = message.guild.channels.find(`name`, `reports`);
    if(!reportchannel) return message.channel.send("Couldn't find report channel.");

    message.delete().catch(O_o=>{});
    reportchannel.send(reportEmbed);
}

module.exports.help = {
    name: "report"
}
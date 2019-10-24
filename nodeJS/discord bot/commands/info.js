const discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
    let boticn = bot.user.displayAvatarURL;
    let totalSeconds = (bot.uptime/1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds/ 3600);
    totalSeconds %=3600;
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds % 60;

    let msgembed = new discord.RichEmbed()
    .setAuthor(`GamerBot`, boticn)
    .setFooter("GamerBot || Development Version")
    .setColor("#2d7dfc")
    .addField("Developer", "aglowingmonitor", true)
    .addField("Bot Version", "1.1", true)
    .addField("NodeJS Version", "12.6", true)
    .addField("DiscordJS Version", "11.5.1",true)
    .addField("Server Host", "Ubuntu", true) //When it was online this was the host
    .addField("Uptime", `${days} days, ${hours} hours`, true);

    return message.channel.send(msgembed);
}

module.exports.help = {
    name: "info"
}
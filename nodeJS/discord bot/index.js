const discord = require('discord.js');
const config = require("./storage/config.json");
const settings = require("./storage/guildConf.json");
const server_ranking = require("./rankhandler.js");
const bot = new discord.Client({disableEveryone: false});
const fs = require("fs");
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err,file) => { //Command modules.
    if(err) console.log(err);

    let jsfile = file.filter(f => f.split(".").pop() === "js"); //Removing .js from the filename
    if(jsfile.length <= 0){ //If its equal to or less than zero somethings wrong. Folder non-existant?
        console.log("Couldn't find commands! What's gone wrong?");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded successfully.`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () =>{
    console.log(`Bot has logged in successfully.`);
    bot.user.setActivity("with oliver in his basement")
    
});

bot.on('guildCreate', (guild) =>{
    console.log("Added to a server!");
    if(!settings[guild.id]){
        settings[guild.id] = {
            prefix: ".",
            logschannel: "",
            welcomemessagechannel: "",
            modrole: "",
            adminrole: "",
            joinmessage: "has joined. Please read the rules in #rules-and-info",
            leavemessage: "has left.",
            banmessage: "has been banned. lmao nonce"
        }
    }
    fs.writeFile("./storage/guildConf.json", JSON.stringify(settings, null, 2), (err)=>{
        if(err) console.warn(`Severe Error: ${err}`)
    })
});

bot.on('guildDelete', (guild)=>{
    console.log("Removed from a server");
    delete settings[guild.id];
    fs.writeFile('./storage/guildConf.json', JSON.stringify(settings, null, 2), (err) =>{
        if(err) console.warn(`Severe Error: ${err}`)
    })
});


bot.on("message", async message =>{
    if(!settings[message.guild.id]){ //if somehow a config doesn't exist for the server
        settings[message.guild.id] = {
            prefix: ".",
            logschannel: "",
            welcomemessagechannel: "",
            modrole: "",
            adminrole: "",
            joinmessage: "has joined. Please read the rules in #rules-and-info",
            leavemessage: "has left.",
            banmessage: "has been banned. lmao nonce"
        }
        fs.writeFile("./storage/guildConf.json", JSON.stringify(settings, null, 2), (err)=>{
            if(err) console.warn(`Severe Error: ${err}`)
        })    
    }
    
    if(message.author.bot) return;
    if(message.channel.type == "dm") return


    let prefix = settings[message.guild.id].prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    let prefixcheck = 
    console.log(cmd);
    if(cmd == "suggest" || cmd == "report"){
        return message.reply("Moderation commands are only available. Other commands will be available next week.")
    }
    cmd = cmd.toLocaleLowerCase();
    //console.log(cmd);
    let args = messageArray.slice(1);

    if(message.content.startsWith(prefix)){
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if(commandfile) commandfile.run(bot,message,args);
    }else{
        //Coin system to go here soon.
    }
    
})

bot.login(config.token);
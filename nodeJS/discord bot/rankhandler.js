//logsystem.run("general", "Description of the thing", args[1] (or something else), message.author.username, message.createdAt)

const discord = require('discord.js');
const settings = require("./storage/guildConf.json");
const server_ranking = require("./storage/ranks.json")

function keepchanges(){
    fs.writeFile("./storage/ranks.json", JSON.stringify(server_ranking, null, 2), (err)=>{
        if(err) console.warn(`Severe Error: ${err}`);
    })
}

module.exports.run = async(message) =>{
    if(!server_ranking[message.author.id]){
        server_ranking[message.author.id] = {
            rank: 0,
            rankcounter: 0,
            currentrankid: 0
        }
        keepchanges();
    }else{
        //bruh
    }

}

module.exports.help = {
    name: "rankhandler"
}
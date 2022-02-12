require('dotenv').config();

const { Client, Intents } = require('discord.js'); 

const DiscordClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 

DiscordClient.on("ready", () => {
    console.log(`O bot do Discord está online`)
    });


function Rep(){
    const channelId = DiscordClient.channels.cache.get("900517905073061949")
    channelId.send(` <@&${900566451566571562}> https://twitch.tv/ameliebtw_ entre AGORA!!!!! `)
}

    
    
module.exports = Rep

function botStart(){
    DiscordClient.login(process.env.DISCORD_TOKEN);
}


module.exports = botStart

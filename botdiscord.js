require('dotenv').config();

const { Client, Intents } = require('discord.js'); 

const DiscordClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 

DiscordClient.on("ready", () => {
    console.log(`O bot do Discord está online`)
    });


function Rep(){
    const channelId = DiscordClient.channels.cache.get("865793028078043139")
    channelId.send(` https://twitch.tv/ameliebtw_ `)
}

    
    
module.exports = Rep

DiscordClient.login(process.env.DISCORD_TOKEN);




// Consts iniciais

require('dotenv').config();

const { MessageFlags } = require("discord.js")
const tmi = require("tmi.js")

const channelName = "bottisco"

const prefix = "!"



// Fim das Consts inicias

// Conexão
const config = {
    options: {
        debug: true
    }, 
    connection: {
        cluster: "aws", 
        reconnect: true
    },
    identity: {
        username: "Bottisco",
        password: process.env.TWITCH_OAUTH
    },
    channels: [channelName]
}

var client = new tmi.client(config)
client.connect() 
   



client.on("connected", (address, port) => {
    client.ping().then(function(data) {
        let ping = Math.floor(Math.round(data*1000))
        client.say(channelName, `Check O bot está online (${ping}ms)`)
    })
})

//Fim da Conexão


// Handler
client.on("chat", (channel, user, message, self) => {
    if (self) return;

    if(message.startsWith("Bottisco")) {
        client.say(channelName, "bom dia")
    }



    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (!message.startsWith(prefix)) return; 
    try {
       let commandFile = require(`./commands/${cmd}.js`)
     commandFile.run(client, message, args, user, channel, self) 
     } catch (err) {
         return;
    }
    



})




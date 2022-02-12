// Consts iniciais

require('dotenv').config();

const { MessageFlags } = require("discord.js")
const tmi = require("tmi.js");
const { listenerCount } = require('tmi.js/lib/events');

const channelName = "ameliebtw_" 

const logsChannel = "bottisco"

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
        console.log(channelName, `Check O bot está online (${ping}ms)`)
    })
})

//Fim da Conexão


//Raid Event
client.on("raided", (channel, username, viewers) => {
    client.followersonlyoff(channelName)
    client.say(channelName, "omegas o bot com o emote meli")
    client.say(logsChannel, `bottiscoSearch ${username} raidou ${channel} com ${viewers} viewers bottiscoSearch`)
    setTimeout(function(){
        client.followersonly(channelName, 0)
    }, 300000);
})
// Fim do Raid Event






// Handler
client.on("chat", (channel, user, message, self) => {
    if (self) return;

//%fed
    if(message.startsWith("%fed")) {

        setTimeout(function(){
            client.say(channelName, `bottiscoTime @${user.username} Vou te notificar que a sua dungeon está disponivel em 3 horas! `)
        }, 500)
        setTimeout(function(){
            client.say(channelName, `bottiscoTime @${user.username} Sua dungeon está disponivel!`)
        }, 10800000);

    }

    if(message.startsWith("%fd")) {

        setTimeout(function(){
            client.say(channelName, `bottiscoTime @${user.username} Vou te notificar que a sua dungeon está disponivel em 3 horas! `)
        }, 500)
        setTimeout(function(){
            client.say(channelName, `bottiscoTime @${user.username} Sua dungeon está disponivel!`)
        }, 10800000);

    }

    if(message.startsWith("%ed 1")) {

        setTimeout(function(){
            client.say(channelName, `bottiscoTime @${user.username} Vou te notificar que a sua dungeon está disponivel em 3 horas! `)
        }, 500)
        setTimeout(function(){
            client.say(channelName, `bottiscoTime @${user.username} Sua dungeon está disponivel!`)
        }, 10800000);

    }

    if(message.startsWith("%ed 2")) {

        setTimeout(function(){
            client.say(channelName, `bottiscoTime @${user.username} Vou te notificar que a sua dungeon está disponivel em 3 horas! `)
        }, 500)
        setTimeout(function(){
            client.say(channelName, `bottiscoTime @${user.username} Sua dungeon está disponivel!`)
        }, 10800000);

    }
//fim do %fed

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

client.on("messagedeleted", (channel, username, deletedMessage, userstate) => {
    client.say(logsChannel, `pajaCmon Uma mensagem de @${username} foi deletada: "${deletedMessage}" MODS`)
});

client.on("timeout", (channel, username, reason, duration, userstate, deletedMessage) => {
    client.say(logsChannel, `peepoPolice @${username} tomou um timeout de ${duration} segundos. bottiscoMODS`)
})

client.on("ban", (channel, username, reason, userstate) => {
    client.say(logsChannel, `bottiscoMODS O usuário @${username} foi banido do chat. bottiscoMODS`)
})


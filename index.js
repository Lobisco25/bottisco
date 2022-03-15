// Consts iniciais

require('dotenv').config();

var replace = require("replace");
const axios = require('axios')
const tmi = require("tmi.js");
const { listenerCount } = require('tmi.js/lib/events');
const { channel } = require('tmi.js/lib/utils');
const fs = require('fs')
const channelName = "ameliebluie" 


const logsChannel = "bottisco"

const prefix = "!"

const botStart = require("./botdiscord.js")

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
    channels: [channelName, logsChannel, "bytter_"]
}

var client = new tmi.client(config)
client.connect() 
var git = require('git-last-commit');





client.on("connected", (address, port) => {

    
    
    client.ping().then(function(data) {
        git.getLastCommit(function(err, commit) {
        let ping = Math.floor(Math.round(data*1000))
        client.say(logsChannel, `Os logs estão online, com ${ping}ms`)
        
        })
    })

    botStart()

})

//Fim da Conexão




//Raid Event
client.on("raided", (channel, username, viewers) => {
    client.followersonlyoff(channelName)

    client.say(logsChannel, `bottiscoSearch ${username} raidou ${channel} com ${viewers} viewers bottiscoSearch`)
    setTimeout(function(){
        client.followersonly(channelName, 0)
    }, 300000);
})

// Fim do Raid Event




// Handler
client.on("chat", (channel, user, message, self) => {
    





    if (self) {
        return;
    }

    if(message.startsWith("oi") && message.includes("bottisco")) {
        axios({
        method: "GET",
        url: `https://api.7tv.app/v2/users/ameliebtw_/emotes`,
        validateStatus: () => true,
        }).then((res) => {
            const rNum = Math.floor(Math.random() * 100)
            const randomEmote = res.data[rNum].name
    
            client.say(channel, `oiii ${user.username} ${randomEmote}`)
    
        })
  
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
// Fim do Handler



// 7TV Event
var EventSource = require("eventsource");
const source = new EventSource('https://events.7tv.app/v1/channel-emotes?channel=ameliebtw_');
source.addEventListener("update", (e) => {
    let data = JSON.parse(e.data)
    if(data.action == "ADD" ){
        client.say(channelName, `@${data.actor} adicionou ${data.name} no 7TV`)
        fs.appendFile("emotes7tv.txt", `${data.name} \n`, (err) =>{
            if (err) {
                console.log(err)
            }
            else {
                fs.readFileSync("emotes7tv.txt")
            }
        } )

    }
    if(data.action == "REMOVE"){
        client.say(channelName, `${data.actor} removeu o ${data.name} na 7TV`)
        replace({
            regex: data.name,
            replacement: '',
            paths: ['./emotes7tv.txt'],
            recursive: false,
            silent: false,
          });
    }
    if(data.action == "UPDATE"){
        client.say(channelName, `${data.actor} mudou o nome de ${data.emote.name} para ${data.name} na 7TV`)
        replace({
            regex: data.emote.name,
            replacement: data.name,
            paths: ['./emotes7tv.txt'],
            recursive: false,
            silent: false,
          });
    }
}, false);
// Fim do 7TV event



// Logs
client.on("messagedeleted", (channel, username, deletedMessage, userstate) => {
    client.say(logsChannel, `pajaCmon Uma mensagem de @${username} foi deletada: "${deletedMessage}" MODS`)
    
});

client.on("timeout", (channel, username, reason, duration, userstate, deletedMessage) => {
    
    client.say(logsChannel, `peepoPolice @${username} tomou um timeout de ${duration} segundos. bottiscoMODS`)
    
})

client.on("ban", (channel, username, reason, userstate) => {
    
    client.say(logsChannel, `bottiscoMODS O usuário @${username} foi banido do chat. bottiscoMODS`)
    
    
})

//Fim dos logs 



  
  
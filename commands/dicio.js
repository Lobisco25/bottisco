exports.run = (client, message, args, user, channel, self) => {
    const axios = require('axios')

    
    
axios.get(`https://significado.herokuapp.com/${args[0]}`) .then((res) => {client.say(channel, `"${args[0]}":  1: ${res.data[0].meanings[0]} | 2: ${res.data[0].meanings[1]}`)}) 

    



}
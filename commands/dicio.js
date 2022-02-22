exports.run = (client, message, args, user, channel, self) => {
    const axios = require('axios')

    
axios({
    method: "GET",
    url: `https://significado.herokuapp.com/${args[0]}`,
    validateStatus: () => true,
    }).then((res) => {
    

    if(res.status == 400) {
    client.say(channel, `Essa palavra não está no dicionário FeelsDankMan`)

    

    } else if(res.data[0].meanings[1] == undefined){
    client.say(channel, `"${args[0]}":  bottiscoSearch 1: ${res.data[0].meanings[0]} `)


} else {
    client.say(channel, `"${args[0]}":  bottiscoSearch 1: ${res.data[0].meanings[0]} | bottiscoSearch 2: ${res.data[0].meanings[1]}`)
}




}) 





}


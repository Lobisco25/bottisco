exports.run = (client, message, args, user, channel, self) => {
    const axios = require('axios')

    
try {    
axios.get(`https://significado.herokuapp.com/${args[0]}`) .then((res) => {
    

    if(res == "Request failed with status code 404") {
    client.say(channel, `Essa palavra não está no dicionário FeelsDankMan`)

} else {
    client.say(channel, `"📕 ${args[0]}":  bottiscoSearch 1: ${res.data[0].meanings[0]} | bottiscoSearch 2: ${res.data[0].meanings[1]}`)
}




}) 

} catch (err) {
    SetTimeout(function(){
        console.log(err)
    }, 2000)
    
}

    



}
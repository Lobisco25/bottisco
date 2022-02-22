exports.run = (client, message, args, user, channel, self) => {
    const axios = require('axios')

    
    
axios.get(`https://significado.herokuapp.com/synonyms/${args[0]}`) .then((res) => {
if(res.data[0] == undefined) {
    client.say(channel, "Não achei sinônimos para essa palavra FeelsDankMan")

} else {
    client.say(channel, `"📕 ${args[0]}":  bottiscoSearch 1: ${res.data[0]} bottiscoSearch | 2: ${res.data[1]}`)
}



}) 

    
i


}
exports.run = (client, message, args, user, channel, self) => {
    const axios = require('axios')

    
    axios({
        method: "GET",
        url: `https://significado.herokuapp.com/synonyms/${args[0]}`,
        ValidateStatus: () => true,
    })


    .then((res) => {
if(res.status == 400 || res.status == 404) {
    client.say(channel, "Não achei sinônimos para essa palavra FeelsDankMan")
    


} else if(res.data[1] == undefined){
    client.say(channel, `"${args[0]}":  bottiscoSearch 1: ${res.data[0]} `)



} else {
    client.say(channel, `"${args[0]}":  bottiscoSearch 1: ${res.data[0]} bottiscoSearch | 2: ${res.data[1]}`)
}



}) 

    
i


}
function randomE() {
    const axios = require("axios")

    axios({
        method: "GET",
        url: `https://api.7tv.app/v2/users/ameliebtw_/emotes`,
        validateStatus: () => true,
        }).then((res) => {
            const rNum = Math.floor(Math.random() * 100)
            const randomEmote = res.data[rNum].name
    
            client.say(channel, randomEmote)
    
        })
  }

module.exports = randomE 
exports.run = (client, message, args, user, channel, self) => {

    const { mod } = require("tmi.js/lib/commands")

    const Rep = require("../botdiscord.js")

    const channelName = "ameliebtw_"

        

    if(user.mod || user.username === channelName) {
        client.say(channelName, "?stop")
    
        client.say(channelName, "%stop")

        Rep()

  
   
    }




}
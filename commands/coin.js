exports.run = (client, message, args, user, channel, self) => { 
    let num = Math.random();
    if (num < 0.5) {
      client.say(channel, `${user.username} sua moeda caiu em cara! 🪙 `)
    } else {
      client.say(channel, `${user.username} sua moeda caiu em coroa! 🪙 `)
      
    }
 


}
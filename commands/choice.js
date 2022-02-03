exports.run = (client, message, args, user, channel, self) => { 
    let num = Math.random();
    if (num < 0.5) {
      client.say(channel, `${user.username} acho melhor ${args[0]} `)
    } else {
      client.say(channel, `${user.username} acho melhor ${args[1]} `)
      
    }
 


}
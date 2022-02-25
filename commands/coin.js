exports.run = (client, message, args, user, channel, self) => { 
    let num = Math.random();
    if (num < 0.5) {
      client.say(channel, `${user.username} sua moeda caiu em cara! 🪙 `)

    } else if(num < 0.02) {
      client.say(channel, `${user.username} taporra caiu em pé OMEGADANCE`)

    
    } else {
      client.say(channel, `${user.username} sua moeda caiu em coroa! 🪙 `)
      
    }
 


}
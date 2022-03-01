exports.run = (client, message, args, user, channel, self) => { 
    let num = Math.random();
    if (num < 0.5) {
      client.say(channel, `${user.username} acho melhor ${args[0]} `)

    } else if(args[1] == undefined){

      client.say(channel, `${user.username} só tem uma escolha FeelsDankMan`)
    
    } else {
      client.say(channel, `${user.username} acho melhor ${args[1]} `)
      
    }
 


}
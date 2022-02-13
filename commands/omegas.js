exports.run = (client, message, args, user, channel, self) => {

    client.say(channel, "i'm actually alive pag pag ")
  
    import isPortReachable from 'is-port-reachable';
  
    var mineStatus = isPortReachable(80, {host: 'google.com'})
    if (mineStatus = true) {
      client.say(channel, "omegas");
      
    } else {
      client.say(channel, "ppFall")
    }

  
      
  }
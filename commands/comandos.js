exports.run = (client, message, args, user, channel, self) => { 
    var fs = require('fs');
    var files = fs.readdirSync('\commands');
    var comandos = files.toString().replace(/.js/g, "").replace(/,/g,", !")
    

    

    client.say(channel, `Os comandos disponíveis são: !${comandos}`)
    

}

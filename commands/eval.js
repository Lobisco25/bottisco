exports.run = (client, message, args, user, channel, self) => {

    if(user.username == "lobisco25") {

    
let evaled = eval(args.join(' '))   
client.say(channel, evaled)


    }


}
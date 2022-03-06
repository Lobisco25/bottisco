exports.run = (client, message, args, user, channel, self) => {

    if(user.username == "lobisco25") {

    client.say(channel, args.join(' '))

    }


}
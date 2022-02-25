exports.run = (client, message, args, user, channel, self) => {

    if(args[1] == undefined) {
        client.say(channel, `${user.username}, Você colocou ${args[0]} para dormir 👉 🛏 `)
    }

    else{
    client.say(channel, `${user.username}, Você colocou ${args[0]} para dormir ${args[1]}👉 🛏 `)
    }
}
exports.run = (client, message, args, user, channel, self) => {

    if(args[1] == undefined) {
        client.say(channel, `${user.username}, Você colocou ${args[0]} para dormir 👉 🛏 `)
    }

 else if (args[0] == user.username) {
     client.say(channel, `${user.username}, Você colocou você mesmo na cama FeelsDankMan 👉 🛏 `)

}
 else{
    client.say(channel, `${user.username}, Você colocou ${args[0]} para dormir ${args[1]}👉 🛏 `)
    }
}
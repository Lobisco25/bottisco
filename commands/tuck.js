exports.run = (client, message, args, user, channel, self) => {
    client.say(channel, `${user.username}, Você colocou ${args[0]} para dormir ${args[1]}👉 🛏 `)
}
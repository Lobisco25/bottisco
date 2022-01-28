exports.run = (client, message, args, user, channel, self) => {
    client.ping().then(function(data) {
        let ping = Math.floor(Math.round(data*1000))
        client.say(channel, `@${user.username} Check PONG! O bot está online (${ping}ms 📡)`)
    })
}
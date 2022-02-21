exports.run = (client, message, args, user, channel, self) => {
    client.say(channel, `Chatting https://www.twitch.tv/popout/moderator/${user.username}/whispers`)
}
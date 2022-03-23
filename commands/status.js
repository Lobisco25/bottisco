exports.run = (client, message, args, user, channel, self) => {

    axios({
        method: "GET",
        url: `https://api.twitch.tv/helix/channels?broadcaster_id=156242233`,
        validateStatus: () => true,
        headers: {
            'Authorization': 'Bearer 88gimb5rp78i599xx3hx1hpn2tz9gg',
            'Client-Id': 'mypbvwd93luy1ha7ihc6t8ttqlyokc',
        }
    }).then((res) => {
        client.say(channel,`O título é: "${res.data.data[0].title}"`)
        
    })
  

}
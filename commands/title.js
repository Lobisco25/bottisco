exports.run = (client, message, args, user, channel, self) => {

    const axios = require('axios')


    


    if(user.mod || user.username == "ameliebluie") {
    axios({
        method: "PATCH",
        url: `https://api.twitch.tv/helix/channels?broadcaster_id=156242233`,
        validateStatus: () => true,
        headers: { 
    
            'Authorization': 'Bearer 88gimb5rp78i599xx3hx1hpn2tz9gg',
            'Client-Id': 'mypbvwd93luy1ha7ihc6t8ttqlyokc',
            'Content-Type': 'application/json'
        },
    
        data:`{"title":"${args.join(' ')}"}`
      
        }).then((res) => {
        
          if(res.status == 401) {
              client.say(channel, `Token desatualizado, @Lobisco25 DinkDonk`)
          }

          if(args[0] == undefined) {
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

          else {
              client.say(channel, `FeelsOkayMan 👍 título atualizado para "${args.join(' ')}" Check `)
          }
    
    
    }) 




    }
    else {
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
}


exports.run = (client, message, args, user, channel, self) => {


    const axios = require('axios')

    axios({
        method: "GET",
        url: `https://api.twitch.tv/helix/users?login=${args[0]}`,
        validateStatus: () => true,
        headers: { 
            
            'Authorization': 'Bearer osqwzy102h7hk19ajgmdrrn7c8t3yq',
            'Client-Id': 'ycvncawvxd627crcz1beodg6g0t7z3'


        }
        }).then((res) => {
        
    

            
            client.say(channel, ` ${res.data.data[0].created_at}`)
            console.log(res.data.data)

        
          
    
    
    }) 


}
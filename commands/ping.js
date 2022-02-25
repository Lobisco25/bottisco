exports.run = (client, message, args, user, channel, self) => {
    function format(seconds){
        function pad(s){
          return (s < 10 ? '0' : '') + s;
        }
        var hours = Math.floor(seconds / (60*60));
        var minutes = Math.floor(seconds % (60*60) / 60);
        var seconds = Math.floor(seconds % 60);
      
        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
      }
      
      var uptime = process.uptime();

      const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
const memoria = Math.round(used * 100) / 100
    client.ping().then(function(data) {
        let ping = Math.floor(Math.round(data*1000))
        client.say(channel, `@${user.username} Check PONG! ${ping}ms 📶| rodando faz ${format(uptime)} bottiscoTime  | ${memoria}MB/512MBs sendo usada bottiscoSearch`)
    })
}
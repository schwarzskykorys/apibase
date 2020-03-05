const request = require('request');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content == "fetch"){
    msg.channel.send("Fetching tickets from API")

    request.get('http://localhost:3000/api/tickets/1050', function (error, response, body) {

    if(!err){
      msg.channel.send(response + body);
    } else {
      msg.channel.send(response.statusCode + ' error: ' + err)
    }
        
    });
  }
});

client.login('');
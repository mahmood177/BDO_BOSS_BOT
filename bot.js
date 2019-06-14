const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!bmon') {
  msg.reply ('Monday \n8:00am Kzarka \n6:00pm Kutum \n9:15pm Kzarka \n11:59pm Kutum');}
  if (msg.content === '!btue') {
    msg.reply ('Tuesday \n8:00am Kutum \n6:00pm Kzarka \n9:15pm Kutum \n11:59pm Kzarka');}
  if (msg.content === '!bwed') {
    msg.reply ('Wednesday \n8:00am Kzarka \n6:00pm Kutum \n9:15pm Kzarka \n11:59pm Kutum');}
	if (msg.content === '!bthu') {
    msg.reply ('Thursday \n8:00am Kutum \n6:00pm Kzarka \n9:15pm Kutum \n11:59pm Kzarka');}
	if (msg.content === '!bfri') {
    msg.reply ('Friday \n8:00am Kzarka \n6:00pm Kutum \n9:15pm Kzarka \n11:59pm Kutum');}
	if (msg.content === '!bsat') {
    msg.reply ('Saturday \n12:00pm Kzarka \n6:00pm Kzarka-Kutum \n9:15pm No Spawn \n11:15pm Kzarka-Kutum');}
	if (msg.content === '!bsun') {
    msg.reply ('Sunday \n12:00pm Kutum \n6:00pm Kzarka-Kutum \n9:15pm Kzarka-Kutum \n11:15pm No Spawn');}
});
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot

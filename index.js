const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Manila', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rpc started! check your profile ^^`);

  const r = new Discord.RichPresence()
    .setApplicationId('1159127696064905256')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/mystiqu3x') //Must be a youtube video link 
    .setState('妬み')
    .setName('randomness')
    .setDetails(`Hey 👋⚓ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1060830136414519336/1196114908551577680/Bon_Appetit_Moon_Taeil_.gif?ex=65b673d0&is=65a3fed0&hm=947f6ed1179afed7570db1e5&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Random Thoughts') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/731154864360390726.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('You weirdo, why would you hover over the small image.') //Text when you hover the Small image

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Hey 👋⚓ [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);

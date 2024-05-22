const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://media.discordapp.net/attachments/1221090089514434620/1221613163674341386/0B2EBD24-4B6E-43F7-BAC9-3510FD064AF9.gif?ex=661336ea&is=6600c1ea&hm=d135a6f1e7793410910b7df402bc2e86336e96a8e3ea2f6384d287e3861acec4&=",

  
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/emojis/966116896405606420.gif?size=96&quality=lossless",
  
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['Vampire (Olivia Rodrigo'];

const randomTexts = [
    '🖤🤍Whats wrong?🖤🤍'


];

const randomtext3 = [
  
  '𝓒𝓪𝓾𝓼𝓮 𝓘 𝓿𝓮 𝓶𝓪𝓭𝓮 𝓼𝓸𝓶𝓮 𝓻𝓮𝓪𝓵 𝓫𝓲𝓰 𝓶𝓲𝓼𝓽𝓪𝓴𝓮𝓼',
  '𝓑𝓾𝓽 𝔂𝓸𝓾 𝓶𝓪𝓴𝓮 𝓽𝓱𝓮 𝔀𝓸𝓻𝓼𝓽 𝓸𝓷𝓮 𝓵𝓸𝓸𝓴 𝓯𝓲𝓷𝓮',
  '𝓘 𝓼𝓱𝓸𝓾𝓵𝓭 𝓿𝓮 𝓴𝓷𝓸𝔀𝓷 𝓲𝓽 𝔀𝓪𝓼 𝓼𝓽𝓻𝓪𝓷𝓰𝓮',
  '𝓨𝓸𝓾 𝓸𝓷𝓵𝔂 𝓬𝓸𝓶𝓮 𝓸𝓾𝓽 𝓪𝓽 𝓷𝓲𝓰𝓱𝓽',
  '𝓘 𝓾𝓼𝓮𝓭 𝓽𝓸 𝓽𝓱𝓲𝓷𝓴 𝓘 𝔀𝓪𝓼 𝓼𝓶𝓪𝓻𝓽',
  '𝓑𝓾𝓽 𝔂𝓸𝓾 𝓶𝓪𝓭𝓮 𝓶𝓮 𝓵𝓸𝓸𝓴 𝓼𝓸 𝓷𝓪𝓲𝓿𝓮',
  '𝓣𝓱𝓮 𝔀𝓪𝔂 𝔂𝓸𝓾 𝓼𝓸𝓵𝓭 𝓶𝓮 𝓯𝓸𝓻 𝓹𝓪𝓻𝓽𝓼',
  '𝓐𝓼 𝔂𝓸𝓾 𝓼𝓾𝓷𝓴 𝔂𝓸𝓾𝓻 𝓽𝓮𝓮𝓽𝓱 𝓲𝓷𝓽𝓸 𝓶𝓮, 𝓸𝓱',
  '𝓨𝓸𝓾 𝓼𝓪𝓲𝓭 𝓲𝓽 𝔀𝓪𝓼 𝓽𝓻𝓾𝓮 𝓵𝓸𝓿𝓮', 
   '𝓫𝓾𝓽 𝔀𝓸𝓾𝓵𝓭𝓷𝓽 𝓽𝓱𝓪𝓽 𝓫𝓮 𝓱𝓪𝓻𝓭?',
  '𝓨𝓸𝓾 𝓬𝓪𝓷𝓽 𝓵𝓸𝓿𝓮 𝓪𝓷𝔂𝓸𝓷𝓮',
  '𝓬𝓪𝓾𝓼𝓮 𝓽𝓱𝓪𝓽 𝔀𝓸𝓾𝓵𝓭 𝓶𝓮𝓪𝓷 𝔂𝓸𝓾 𝓱𝓪𝓭 𝓪 𝓱𝓮𝓪𝓻𝓽',
  '',



];

const randomtext4 = [
 '🤍★☆★☆★🖤', 
 '🖤☆★☆★☆🤍'



];

const randomtext5 = [];

const randomLinks = [
  "https://www.twitch.tv/mystiqu3x",
];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getTimestampsForDay(year, month, day) {
  const date = new Date(Date.UTC(year, month, day));
  date.setHours(date.getHours() + 8);
  date.setUTCHours(0, 0, 0, 0);
  const timestampMidnight = date.getTime();
  date.setUTCHours(11, 59, 59, 999);
  const timestampEndOfDay = date.getTime();
  const ampmMidnight = date.getHours() < 12 ? 'AM' : 'PM';
  const ampmEndOfDay = date.getHours() < 12 ? 'AM' : 'PM';


  return {
    timestampMidnight,
    timestampEndOfDay,
    ampmMidnight,
    ampmEndOfDay
  };
}



app.all('/', (req, res) => {
  res.send("NOW GO TO uptimerobot.com AND PASTE THIS URL");
});

app.listen(8080, () => {
  console.log("Server is ready!!");
});

bot.on('debug', (a) => {
  if (a.startsWith("Hit a 429")) process.kill(1);
});

bot.on('ready', async () => {
  setInterval(() => {
    const date = new Date();
    const datee = date.getDate();
    const hours = (date.getHours() + 8) % 24;
    const minutes = date.getMinutes();
    const months = date.getMonth();
    const year = date.getFullYear();
    const timestamps = getTimestampsForDay(year, months, datee);
    function addZero(number) {
  return number < 10 ? "0" + number : number;
}

  function getRandomNumber() {
    return Math.random() * (30 - 20) + 20;
  }
  function getWRandomNumber() {
    return Math.random() * (5 - 3) + 3;
  }
  function roundToDecimal(number) {
    return Math.round(number * 10) / 10;
  }

  const randomNumber = getRandomNumber();
  const roundedNumber = roundToDecimal(randomNumber);
  const roundwNumber = roundToDecimal(getWRandomNumber());
    const month = addZero(months+1);
    const dates = addZero(datee)
    const resultthree = `〈 ${addZero(hours)}:${addZero(minutes)} ${hours < 12 ? 'AM' : 'PM'} 〉`;


    // Randomize the link and text for the button
    randomXX = getRandomElement(xxxx);
    rdpictureGede = getRandomElement(pictureGede);
    rdsmallpictureGede = getRandomElement(smallpictureGede);
    const randomButtonText = getRandomElement(randomTexts);
    const randomButtonText3 = getRandomElement(randomtext3);
    const randomButtonText4 = getRandomElement(randomtext4);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);
    const detailsText = `${randomButtonText3} - ${resultthree}`;
    const pr = new RichPresence()  
      .setName(`CRAMMING`)
      .setURL('https://www.twitch.tv/mystiqu3x')
      .setType(`${type}`.toUpperCase())
      .setApplicationId("1159127696064905256")
      .setAssetsLargeImage(`${rdpictureGede}`)
      .setAssetsSmallImage(`${rdsmallpictureGede}`)
      .setAssetsLargeText(`
🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
      .setState(`: ${randomXX}`)
      .setDetails(detailsText)
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(`${randomButtonText}`, `${linkButtonone}`)
      .addButton(`${randomButtonText4}`, `${linkButtonone}`)
    bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(process.env['TOKEN']);

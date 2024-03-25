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
  "https://cdn.discordapp.com/emojis/966116896405606420.gif?size=96&quality=lossless",
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['The 999th member in Cat Society'];

const randomTexts = [
  'Come And Join Us'


];

const randomtext3 = [
  '𝓅𝓇𝒶𝓈𝑒 𝓂𝑒 𝓂𝒶𝓇𝓉𝓎𝓇',
  '𝒯𝒽𝑒 𝒟𝒶𝓇𝓀 𝐸𝓁𝒻',
  '𝓈𝓅𝒶𝓇𝓀𝓁𝒾𝓃𝑔 𝑒𝓂𝑜𝓉𝒾𝑜𝓃',
  '𝒯𝑜𝓂𝑜𝓇𝓇𝑜𝓌 𝓍 𝓉𝑜𝑔𝑒𝓉𝒽𝑒𝓇',
  '𝐼𝓃𝓉𝑒𝓇𝒸𝑜𝓃𝓃𝑒𝒸𝓉𝑒𝒹',
  '𝒰𝓃𝓉𝒾𝓉𝓁𝑒𝒹',
  '𝐼𝓉 𝒲𝒶𝓈 𝒜 𝒟𝒶𝓇𝓀 𝒶𝓃𝒹 𝒮𝓉𝑜𝓇𝓂𝓎 𝒩𝒾𝑔𝒽𝓉',
  '𝒯𝒽𝑒 𝒹𝒶𝓇𝓀 𝒶𝓁𝓁𝓎 𝓂𝒶𝒹𝑒 𝓂𝑒 𝒻𝑒𝑒𝓁 𝓊𝓃𝑒𝒶𝓈𝓎',
  '𝐼𝓁𝓁 𝓉𝒶𝓀𝑒 𝒾𝓉 𝒶𝓁𝓁',
  '𝐵𝑒 𝒹𝓇𝑒𝒶𝓂𝒾𝓃𝑔',


];

const randomtext4 = [
  '★☆★☆★☆★', '☆★☆★☆★☆'


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
  date.setHours(date.getHours() + 7);
  date.setUTCHours(0, 0, 0, 0);
  const timestampMidnight = date.getTime();
  date.setUTCHours(23, 59, 59, 999);
  const timestampEndOfDay = date.getTime();

  return {
    timestampMidnight,
    timestampEndOfDay
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
    const hours = (date.getHours() + 7) % 24;
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
    const resultthree = "Badminton"


    // Randomize the link and text for the button
    randomXX = getRandomElement(xxxx);
    rdpictureGede = getRandomElement(pictureGede);
    rdsmallpictureGede = getRandomElement(smallpictureGede);
    const randomButtonText = getRandomElement(randomTexts);
    const randomButtonText3 = getRandomElement(randomtext3);
    const randomButtonText4 = getRandomElement(randomtext4);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);
    const pr = new RichPresence()  
      .setName(`Honkai Star Rail`)
      .setURL('https://www.twitch.tv/mystiqu3x')
      .setType(`${type}`.toUpperCase())
      .setApplicationId("1159127696064905256")
      .setAssetsLargeImage(`${rdpictureGede}`)
      .setAssetsSmallImage(`${rdsmallpictureGede}`)
      .setAssetsLargeText(`
🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
      .setState(`: ${randomXX}`)
      .setDetails(`${randomButtonText3}`)
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(`${randomButtonText}`, `${linkButtonone}`)
      .addButton(`${randomButtonText4}`, `${linkButtonone}`)
    bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(process.env['TOKEN']);

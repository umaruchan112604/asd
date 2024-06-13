const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://cdn.discordapp.com/attachments/1221090089514434620/1250873130633789450/B4D5CB41-90D1-47F9-9803-65FC1AC8EBB7.gif?ex=666c85e2&is=666b3462&hm=a31e7ec3ff58d5dc12dd3b9c64c6e3d897f7bfaa8b911d48062d6c1dc53df6a1&",

  
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/emojis/966116896405606420.gif?size=96&quality=lossless",
  
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['Palagi (Tj Monterde)'];

const randomTexts = [
    '🖤🤍I Miss You🖤🤍'


];

const randomtext3 = [
  
  '𝓔𝓽𝓸 𝓽𝓪𝔂𝓸',
  '𝓢𝓪 𝓱𝓾𝓵𝓲, 𝓹𝓪𝓵𝓪𝓰𝓲',
  '𝓑𝓪𝓫𝓪𝓵𝓲𝓴 𝓹𝓪 𝓻𝓲𝓷 𝓼𝓪 𝔂𝓪𝓴𝓪𝓹 𝓶𝓸',
  '𝓗𝓪𝓷𝓰𝓰𝓪𝓷𝓰 𝓼𝓪 𝓱𝓾𝓵𝓲, 𝓹𝓪𝓵𝓪𝓰𝓲',
  '𝓟𝓲𝓹𝓲𝓵𝓲𝓲𝓷 𝓴𝓸𝓷𝓰 𝓶𝓪𝓰𝓲𝓷𝓰 𝓼𝓪𝔂𝓸',
  '𝓤𝓵𝓲𝓽-𝓾𝓵𝓲𝓽𝓲𝓷 𝓶𝓪𝓷',
  '𝓝𝓪𝓲𝓼 𝓴𝓸𝓷𝓰 𝓶𝓪𝓵𝓪𝓶𝓪𝓷 𝓶𝓸𝓷𝓰',
  '𝓘𝔂𝓸 𝓪𝓴𝓸',
  '𝓚𝓾𝓷𝓰 𝓫𝓪𝓵𝓲𝓴𝓪𝓷 𝓶𝓪𝓷 𝓪𝓷𝓰 𝓱𝓲𝓻𝓪𝓹, 𝓵𝓾𝓱𝓪𝓽 𝓵𝓪𝓱𝓪𝓽', 
  '𝓘𝓴𝓪𝔀 𝓪𝓷𝓰 𝓹𝓪𝓫𝓸𝓻𝓲𝓽𝓸 𝓴𝓸𝓷𝓰 𝓭𝓮𝓼𝓲𝓼𝔂𝓸𝓷 𝓪𝓽',
  '𝓟𝓪𝓰 𝓷𝓪𝓹𝓪𝓵𝓲𝓰𝓲𝓻𝓪𝓷 𝓷𝓰 𝓲𝓷𝓰𝓪𝔂 𝓪𝓽 𝓷𝓰 𝓰𝓾𝓵𝓸',
  '𝓓𝓲 𝓴𝓸 𝓹𝓪𝓰𝓹𝓪𝓹𝓪𝓵𝓲𝓽 𝓷𝓰𝓲𝓽𝓲 𝓶𝓸 𝓼𝓪 𝓶𝓾𝓷𝓭𝓸',



];

const randomtext4 = [
 '🤍★☆★☆★🖤', 
 '🖤☆★☆★☆🤍'



];

const randomtext5 = [];

const randomLinks = [
  "https://open.spotify.com/playlist/5IoyzQmHL5xdJedkFxosIA?si=df9f5d9acb284627&pt=7dbb488f6bd41146469ae511c10dbe97",
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

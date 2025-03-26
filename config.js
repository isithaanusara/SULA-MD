const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝐒𝐔𝐋𝐀-𝐌𝐃=7EgyHYBD#soS5PbCjsCzRJFmdg7f4tS9WxqIMjGVZ-F130Zd9myU", // ඔයාගේ session id එක දාන්න
MONGODB: process.env.MONGODB || "mongodb://mongo:WMHBPxpUZngirRYAyRdCYDsGTfQkdAAt@crossover.proxy.rlwy.net:56047", // ඔයාගේ mongodb url එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/4g2tYcsx/1387.jpg",
BOT_NAME: process.env.BOT_NAME || "𝐒𝐔𝐋𝐀-𝐌𝐃",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};

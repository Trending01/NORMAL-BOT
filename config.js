const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUy46bSBT9lai2ttI8jW2ppSkwDRi/AD+wR7MoQ4Fpni4KbBP1N2SXbPMB2eZ/ov6SEe7uJKNkMj27qrqvc2+de96BLI9KbOILGL4DBYlqRHF7pJcCgyGQqyDABHSBjygCQzA3K8rQm70+K+jOmExvxklsGvUydqP8vM3tUNNmliK6F1e4BQ9dUFT7JPJ+kxDDOzcKWM3tGzeurm44uxGjZSpOmAkezc0c9RB/kEp3r05vwUObEUUkykK1OOAUE5SY+LJAEXkdfMs8LgpZZFc3o3i7H8Rjt052TEYbX78faVxsTvf2qXQChzVeBz+DgXCj8SHDzhVosc0Jsgbezc7OiAygvhiTLaoLbsVDPX6CX0Zhhn3DxxmN6OXVc/fUvRYb+tE+HZ0UFpRjFD/j4nAcVOGd7Y+hNvcdGBda1n8dcGXmm9ZkxuR9NXbuzOM406XdQAkqkmZ6RntebMS8nwX25h/AF+SFK/H/mrtem3g9KTxVTgRon51TJ0lYdsxlR3llKopur+8ujjLzeet18IV5xkznjVxOC0Fw6XEBDXJ/6FcpTJWaPXCy3WebSW6ebO87fEQr8juUVLeiapTmLg/XE49oKZKPZ8RMR9uj6V14LbLyZLJ1MXLcRWmNXFeRkCyTfTOY6BnTYbIoH403Cwvf1NW5tJx7yWZD6/baUYwvhg+G7EMXEBxGJSWIRnnWvnFdgPzawR7B9DpcMItDuF72I7OUst0qO+lEtNZ3vbyI46AHO8h1zUNwv7fv1dUt6IKC5B4uS+zrUUlzcpniskQhLsHwz+s/tS0TnOYUjyMfDAHH86IoiT1mwLJ/lG9PB0RLVBRvM0xBFwQkT6cYDCmpcBdcA3go8QMBssqgN5IVTh3xQq9tKn0qtIxSXFKUFmDISny/L3J8j334qwsyfKZPjGn75NkuCCJS0lVWFUmO/Bc6vRiR5+VVRp1L5intARMw/OEZUxplYdl2U2WIeIeoxkqLHQwDlJT422gxwf7z27foNsrHFEVJ2bJ/ekmpYJnqAi1iidE0aIVQCSH4Xu2FL08/sp8u1q5A6mIhwInvmbuCsX39WAcSXe4ER5P0jt0RN6owim9/kQQMQdUsGm3UrIM06LCaiNeJedx2lo4kbsrO2YdhOOWzzm5HEFRPm4HMiZaoedVKF8vtpLbnCePQZkOX0p2Wb8s+z00STjndttV8XEce/rFYnub8AR0bImAGKXpNtEuVpkU13fXuY2eH76qzxhPOqKnSD615E5fVukJnpzmpEjdurKUT8uqcnRmxXzAy1xO98j6ET0xOryv0E5GGnPQzl5KrG8v1xb7U4wb9AdvnhdazNXRBhtpk4PHj+8cPn79++fT1y6fHD5/fLG11NjJm2ht57jhvfjQ9fnwPXpY5eRbR6Jno0fUaRPiqSc+p/xPh0+xaBjIP3R9yPKvcvyiFvGlG7LpjSr1lByq8q6TIV127R/iOtOKweqjON3FQrQ9zKIKHdhWKBNEgJykYgqg45BkGXUDyqmW0kQX575Qahob8rCIJKin8viW/WDxRevJakLzQUXloZ6AJMK1AF6QXWBQORfRl6QCUYwgXUgge/gak8s+9CQgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Trending Boss",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "233557560911",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'TRENDING-BOSS',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '0' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});






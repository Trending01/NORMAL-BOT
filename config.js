const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVy47aSBT9lai2kOAntpFaGhsMBvMwGNvAaBaFXX6AX5TLbkzEN2SXbPMB2eZ/ov6SkZtudY8yyfR4VarHvefee87xR5BmUYF0VIPeR5DjqIIENUtS5wj0gFL6PsKgDTxIIOiBsc7Wsemrdrhwdc04TkcXZTPK6UwzHIVT1Lij+4cWnrLO+A5c2yAv93Hk/iagLLHr8FCKw708DqN0RqXM/qKkS+tywtm0M7f8XVKjRNCc4A5cm4gwwlEaqHmIEoRhrKPagBF+I/yBlW7Nw0VeDnfnoWS5uYCCzmiJJcqbZLDuU9Wiw2nTKfVG+BfZMKLWYNYqrMzOSZpkTMEMq46fxP6Kx2OFGAEc1Zlcqzf4RRSkyBt7KCURqd/cd12rLv7eWW5X2ZRP8oFkb2MRbpyOsNnQrDVphWWcLJKQxNwb++4eLn1LK/ub+8VgixXFqshCF8YO01kzE7NFhGov7czTNLBeAzfwM1eO/6fvi3lMpxt3GyqTqLTd4YE2bBRLyd7euti2Vkq9o/Ypl9Tp7G3wq3w4ELnDcJFP0nBMsUvjgpw9Y7cEDfqD414ecJvzuX+yQ/EFPiQl/h3K/tnYTJnppdiUy/4c6keuK4pz/6AHnVTGMoeMmKn4gbSFHp8TZiAHale2x/x2LcRRWfpKQgWtQIqEWra3Uyo49VeHg3z3WNER1WMP9OhrG2AURAXBkERZ2uyJVBtArzKRixF57C4YsxDNmYuyvtgcE/KjoYJHbhzqQ/lcSdxqRE2ERLEdIZhwd6ANcpy5qCiQp0UFyXA9Q0UBA1SA3p+Pg2pqxijJCJpEHugBhmV5XuC7lETTfxQf7kNICpjnH1JEQBv4OEtmCPQILlEbPD5g5S7N8nJX4tQuw0rKUFCYpqrklmgdJaggMMlBjxZYURBZjqKuf7VBis7kRpmmUJZuAz/CBbHSMo8z6D3z6fkQum5WpsSsU7ffLBAGvVfbiJAoDYqmmjKF2A2jCvUb7KDnw7hA1zbwUBW5qIkHHLLV8JojS6VcjTj6DBUuXtw33Qqz9HbFk6C3Z3nuvY847z3n+/C9yPD8e88TKI6iBE6EHGhacFNr8+aX5NGslO3ys52kiLhjn815XGzrNexoQ+qRALepI4y8587uoXss83V2ROnvHCbdC9nsXEQ6dPLFxRzOp7TTNXPTVF/FvbEJ9D6+OGQ/85p43Y0gCKqmg2ZaTZ6fGNBjuJ9JkMLmNnj48unh87cf37/++P714fO3d+uVOh+M56N3ysI0370+evjyqYHzNKsmkYcIjOKiEdasTgi31NVJSh8wNRrJaiD3Axm8zPZZnjf+72eGveFwlRucPPVcfZdTK087Vb5A1jvOHAlaa9XiHZUbHO/+JQjogXMt6qbV11Wpy19GZitZrx2rP+X5hWxr+UoXuuwsOy63aqpNu5rE+thldqwwNnZBPvC6O3VG80jC3nzGwHR1Op/cMhg0Wn7m2D+S0WdbxeF0wRrCyRSrARsT53gYT4b+iRpYcmo7K9VyqtHIbN2HdHoIPW+3FRdIMW0isrM9T8J+rVfhBq5H7mGrFLJ1CG7G8Whc8dMPI3rS9I2RfoQe/fdpVv850xdxUNf2qxhPjv4LAirOZUDbLV3orltyn930E+ipm1UXsy3BYpAalufO0S/tcCHz4NqoPo8h8TOcgB6IHsUG2iCGBZFf5P2zY7CS2AZJLee5SSB5dgUgN58hIHD9G4j7VsSrCAAA',
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






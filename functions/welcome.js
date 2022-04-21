const fs = require("fs");
const Wel = JSON.parse(fs.readFileSync('./database/welcome.json'));

const welAwal = `╭─✦─•❮✦⋆☬⋆✦❯•─✦─╮
├➽ Hola @user 
├➽ Bienvenido(a) al grupo 
├➽ *@group*
╰─✦─•❮✦⋆☬⋆✦❯•─✦─╯

╭┅─═•ঈ⋆❥🔮❥⋆ঈ•═─┅╮
╽Hola 👋🏻 espero que se 
┃Sienta como en casa   
┃ 🍿 🍭 🍫 🍬 🍡  🤗  
┃ Disfruta del grupo 🥳  
┃Se sociable y aporta😊 
┃Espero hagas amig@s  
┃Lee las reglas porfavor 
╿      👻 🔫 💣🧨💥    
╰┅─═•ঈ⋆❥🔮❥⋆ঈ•═─┅╯`;

const byeAwal = `╭┅─═•ঈ⋆❥🔮❥⋆ঈ•═─┅╮
┃Adiós 🙋🏻‍♂️  estaremos    
┃Mejor sin ti   😹  🐈💨 
┃. 。⋆ • 。•。⋆ඞ    •　ﾟ  
┃No vuelvas por favor😹 
┃.ﾟ • ﾟ • .ﾟ  • ඞ 。⋆ ﾟ  ﾟ .
┃@user 🐈💨
╰┅─═•ঈ⋆❥🔮❥⋆ঈ•═─┅╯
╰•⋆҈͜͡ ⫘⋆𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐓𝐑⋆⫘⋆҈͜͡•╯
`;
/**
 * Add welcome text to db
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 * @returns {boolean}
 */
const addCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = true;
    }
  });
  if (position === false) {
    const obj = { 
      from: chatId, 
      textwelcome: welAwal,
      textbye: byeAwal
    };
    Wel.push(obj);
    fs.writeFileSync('./database/welcome.json', JSON.stringify(Wel, null, "\t"));
    return false;
  }
};

/**
 * Get Custom Welcome Text
 * @param {string} chatId
 * @param {object} Wel
 * @returns {Number}
 */
const getCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    return Wel[position].textwelcome;
  }
};
/**
 * Get Custom bye Text
 * @param {string} chatId
 * @param {object} Wel
 * @returns {Number}
 */
const getCustomBye = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    return Wel[position].textbye;
  }
};

/**
 * Set Custom Welcome
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 */
const setCustomWelcome = (chatId, value) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textwelcome = value;
  }
};

/**
 * Set Custom Welcome
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 */
const setCustomBye = (chatId, value) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textbye = value;
  }
};

/**
 * Reset Custom Welcome
 * @param {string} chatId
 * @param {object} Wel
 */
const delCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textwelcome = welAwal;
  }
};

/**
 * Reset Custom Welcome
 * @param {string} chatId
 * @param {object} Wel
 */
const delCustomBye = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textbye = byeAwal;
  }
};

module.exports = {
  Wel,
  addCustomWelcome,
  getCustomWelcome,
  setCustomWelcome,
  delCustomWelcome,
  getCustomBye,
  setCustomBye,
  delCustomBye
};

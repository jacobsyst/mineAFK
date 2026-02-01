const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '64.31.8.169',       // your server IP
  port: 19026,                // your server port
  username: 'DrewAlt'     // replace with your bot's username
});

bot.on('spawn', () => {
  console.log('Bot connected!');
  bot.chat('/login hithisisalt'); // automatically logs in on join
});

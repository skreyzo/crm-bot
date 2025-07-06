const cron = require('node-cron');
const db = require('./data');

module.exports = (bot) => {
  cron.schedule('0 9 * * *', async () => {
    await db.read();
    console.log('[cron] 🤖 Псс, пора бы напомнить родителям!');
    // позже: уведомления о неоплате / занятиях
  });
};

const db = require('../services/data');

exports.weekCmd = async (ctx) => {
  await db.read();
  const lessons = db.data.lessons;

  if (!lessons.length) {
    return ctx.reply('На неделю ничего не запланировано 📭');
  }

  const msg = lessons.map(l => {
    const date = new Date(l.date).toLocaleString();
    return `${date}: ${l.studentName || '???'}`;
  }).join('\n');

  ctx.reply(`🗓 Уроки:\n${msg}`);
};

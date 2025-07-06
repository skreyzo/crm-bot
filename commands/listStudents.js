const db = require('../services/data');

exports.listStudentsCmd = async (ctx) => {
  await db.read();
  const students = db.data.students;

  if (!students.length) {
    return ctx.reply('Список пуст ☹️');
  }

  const msg = students.map(s => `• ${s.name} (${s.grade} кл., тел: ${s.phone})`).join('\n');
  ctx.reply(`👥 Ученики:\n\n${msg}`);
};

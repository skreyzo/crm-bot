const { nanoid } = require('nanoid');
const db = require('../services/data');

exports.addStudentCmd = async (ctx) => {
  const args = ctx.message.text.split(' ').slice(1);
  if (args.length < 3) {
    return ctx.reply('Формат: /add_student <Имя> <Класс> <Телефон родителя>');
  }

  const [name, grade, phone] = args;
  const id = nanoid(6);

  await db.read();
  db.data.students.push({
    id,
    name,
    grade,
    phone,
    createdAt: Date.now()
  });
  await db.write();

  ctx.reply(`✅ Ученик ${name} (ID: ${id}) добавлен!`);
};

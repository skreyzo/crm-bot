require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const { addStudentCmd } = require('./commands/addStudent');
const { listStudentsCmd } = require('./commands/listStudents');
const { weekCmd } = require('./commands/week');

bot.start(ctx =>
    ctx.reply(`Привет, ${ctx.from.first_name}! Это твоя мини-CRM по школе 📚`)
);

// ========== Команды ==========
bot.command('add_student', addStudentCmd);
bot.command('students', listStudentsCmd);
bot.command('week', weekCmd);

// ========== Крон-задачи ==========
require('./services/scheduler')(bot);

bot.launch();
console.log('🤖 Bot is up');

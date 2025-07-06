const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const { join } = require('path');

const file = join(__dirname, '..', 'db', 'data.json');
const adapter = new JSONFile(file);

// 👇 передаём lowdb «скелет» сразу
const defaultData = { students: [], lessons: [], payments: [] };
const db = new Low(adapter, defaultData);

(async () => {
    // читаем (создаст файл, если его нет)
    await db.read();
    // гарантируем, что файл записан хотя бы с дефолтами
    await db.write();
})();

module.exports = db;

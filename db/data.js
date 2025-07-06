const defaultData = { students: [], lessons: [], payments: [] };
const db          = new Low(adapter);

(async () => {
  await db.read();

  // 👇 сливаем дефолты со всем, что есть на диске
  db.data = { ...defaultData, ...(db.data || {}) };

  await db.write();   // гарантируем, что файл не пустой
})();

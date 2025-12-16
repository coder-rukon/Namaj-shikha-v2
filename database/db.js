import * as SQLite from 'expo-sqlite';

// Open database (synchronously)
const db = SQLite.openDatabaseSync('rsnamajshikkha');

// Initialize tables
export const initDatabase = async () => {
  try {
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS menu (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, items TEXT NOT NULL);
        `);

    console.log('Table created successfully!');
  } catch (error) {
    console.log('Error creating table:', error);
  }
};

export const getTables = async () => {
  try {
    //const result = await db.runAsync('INSERT INTO menu (name, items) VALUES (?, ?)', 'aaa', '100');
    const firstRow = await db.getFirstAsync('SELECT * FROM menu');
    console.log(firstRow.name, firstRow.items);
  } catch (error) {
    console.log('Error fetching tables:', error);
  }
};
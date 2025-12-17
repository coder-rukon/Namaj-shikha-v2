import * as SQLite from 'expo-sqlite';

// Open database (synchronously)
const db = SQLite.openDatabaseSync('rsnamajshikkha_v7');
export { db };
// Initialize tables
export const initDatabase = async () => {
  try {
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS menu (id INTEGER PRIMARY KEY NOT NULL,remote_id INTEGER UNIQUE, name TEXT NOT NULL, admin_name TEXT, icon TEXT, menu_items TEXT NOT NULL );
        `);

    console.log('Table created successfully!');
  } catch (error) {
    console.log('Error creating table:', error);
  }
};
export const InsertMenuItem =async (menuItem) => {
  await db.runAsync(
    `INSERT INTO menu (remote_id, name, admin_name, icon, menu_items)
  VALUES (?, ?, ?, ?, ?)
  ON CONFLICT(remote_id) DO UPDATE SET
    name = excluded.name,
    admin_name = excluded.admin_name,
    icon = excluded.icon,
    menu_items = excluded.menu_items
  `,
    [
      menuItem.id,
      menuItem.name,
      menuItem.admin_name,
      menuItem.icon ?? null,
      JSON.stringify(menuItem.menu_items)
    ]
  );
  //await db.runAsync('INSERT INTO menu (remote_id,name, admin_name,icon,menu_items) VALUES ("'+menuItem?.id+'", "'+menuItem?.name+'", "'+menuItem?.admin_name+'", "'+menuItem?.icon+'", "'+ JSON.stringify(menuItem?.menu_items)+'")');
}
export const getTables = async () => {
  try {
    //const result = await db.runAsync('INSERT INTO menu (name, items) VALUES (?, ?)', 'aaa', '100');
    const menuItems = await db.getAllAsync('SELECT * FROM menu');
    menuItems.forEach(menu => {
      console.log('id='+menu.remote_id, menu.name);
      
    });
  } catch (error) {
    console.log('Error fetching tables:', error);
  }
};
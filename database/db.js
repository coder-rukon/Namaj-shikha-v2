import * as SQLite from 'expo-sqlite';

// Open database (synchronously)
let db = SQLite.openDatabaseSync('rsnamajshikkhadb.db');
export { db };
export const deleteDatabase = async () => {
  try {
    await db.closeAsync();
    await SQLite.deleteDatabaseAsync('rsnamajshikkhadb');
    console.log('Database deleted successfully');
  } catch (error) {
    console.log('Error deleting database:', error);
  }
};
// Initialize tables
export const initDatabase = async () => {
  db = SQLite.openDatabaseSync('rsnamajshikkhadb');
  try {
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS menu (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, admin_name TEXT, details TEXT, after_menu_details TEXT, icon TEXT, menu_items TEXT NOT NULL );
        CREATE TABLE IF NOT EXISTS app_content (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL, content_type TEXT, tags TEXT, name_ar TEXT, name_eng TEXT ,  audio_file TEXT ,  data TEXT , desctiption TEXT );
        CREATE TABLE IF NOT EXISTS page (id INTEGER PRIMARY KEY NOT NULL, category INTEGER, name TEXT NOT NULL, contents TEXT, meta TEXT);
        `);

    console.log('Table created successfully!');
  } catch (error) {
    console.log('Error creating table:', error);
  }
};
export const clearTables =async (menuItem) => {
  await db.execAsync( `
      DELETE FROM menu;
      DELETE FROM app_content;
      DELETE FROM page;
      
    `);
    console.log("Clear all tables")
}
export const insertAppContentItem =async (content) => {
  await db.runAsync(
    `INSERT INTO app_content (id, name, content_type, tags, name_ar, name_eng, audio_file, data, desctiption)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      content.id,
      content.name,
      content.content_type,
      content.tags ?? null,
      content.name_ar ?? null,
      content.name_eng ?? null,
      content.audio_file ?? null,
      JSON.stringify(content.data),
      content.desctiption ?? null,
    ]
  );
  //await db.runAsync('INSERT INTO menu (remote_id,name, admin_name,icon,menu_items) VALUES ("'+menuItem?.id+'", "'+menuItem?.name+'", "'+menuItem?.admin_name+'", "'+menuItem?.icon+'", "'+ JSON.stringify(menuItem?.menu_items)+'")');
}
export const InsertMenuItem =async (menuItem) => {
  await db.runAsync(
    `INSERT INTO menu (id, name, admin_name, details, after_menu_details, icon, menu_items)
  VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      menuItem.id,
      menuItem.name,
      menuItem.admin_name,
      menuItem.details,
      menuItem.after_menu_details,
      menuItem.icon ?? null,
      JSON.stringify(menuItem.menu_items)
    ]
  );
}
export const InsertPageItem =async (page) => {
  await db.runAsync(
    `INSERT INTO page (id, name, category, contents, meta)
  VALUES (?, ?, ?, ?, ?)`,
    [
      page.id,
      page.name,
      page.category,
      page.contents,
      JSON.stringify(page.meta)
    ]
  );
}
export const getPageContents = async () => {
  try {
    //const result = await db.runAsync('INSERT INTO menu (name, items) VALUES (?, ?)', 'aaa', '100');
    const pageItems = await db.getAllAsync('SELECT * FROM page');
    pageItems.forEach(page => {
      console.log('page id='+page.id, page.name);
      
    });
  } catch (error) {
    console.log('page Error fetching tables:', error);
  }
};
export const getAppContentTable = async () => {
  try {
    //const result = await db.runAsync('INSERT INTO menu (name, items) VALUES (?, ?)', 'aaa', '100');
    const app_content = await db.getAllAsync('SELECT * FROM app_content');
    app_content.forEach(app_con => {
      console.log('id='+app_con.id, app_con.name);
      
    });
  } catch (error) {
    console.log('Error fetching tables:', error);
  }
};
export const getMenuTable = async () => {
  try {
    //const result = await db.runAsync('INSERT INTO menu (name, items) VALUES (?, ?)', 'aaa', '100');
    const menuItems = await db.getAllAsync('SELECT * FROM menu');
    menuItems.forEach(menu => {
      console.log('id='+menu.id, menu.name);
      
    });
  } catch (error) {
    console.log('Error fetching tables:', error);
  }
};
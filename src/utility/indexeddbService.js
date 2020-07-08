import { openDB, deleteDB } from "idb";

const DB_NAME = "rickcyclopedia";
const STORE_NAME = "pageData";
const DB_VERSION = 1;

const idbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(STORE_NAME, { autoIncrement: true });
  },
});

class DBService {
  async get(key) {
    try {
      const db = await idbPromise;
      return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(key);
    } catch (error) {
      console.log("GET err==>", error);
      return false;
    }
  }

  async getAll() {
    try {
      const db = await idbPromise;
      return db.transaction(STORE_NAME).objectStore(STORE_NAME).getAll();
    } catch (error) {
      console.log("GET_ALL err==>", error);
      return false;
    }
  }

  async getAllKeys() {
    try {
      const db = await idbPromise;
      return db.transaction(STORE_NAME).objectStore(STORE_NAME).getAllKeys();
    } catch (error) {
      console.log("GET_ALL err==>", error);
      return false;
    }
  }

  async put(object, key = null) {
    try {
      const db = await idbPromise;
      if (key) {
        return db
          .transaction(STORE_NAME, "readwrite")
          .objectStore(STORE_NAME)
          .put(object, key);
      }
      return db.put(object);
    } catch (error) {
      console.log("PUT err==>", error);
      return false;
    }
  }

  async delete(key) {
    try {
      const db = await idbPromise;
      return db
        .transaction(STORE_NAME, "readwrite")
        .objectStore(STORE_NAME)
        .delete(key);
    } catch (error) {
      console.log("DEL err==>", error);
      return false;
    }
  }

  async deleteAll() {
    try {
      const db = await idbPromise;
      return db
        .transaction(STORE_NAME, "readwrite")
        .objectStore(STORE_NAME)
        .clear();
    } catch (error) {
      console.log("DEL_ALL err==>", error);
      return false;
    }
  }

  async deleteDB() {
    await deleteDB(DB_NAME);
  }
}

export const Service = new DBService();

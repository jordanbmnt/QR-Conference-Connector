export const createTable = (database) => {
  database.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, position TEXT, email EMAIL, profilePic TEXT, github TEXT, companyName TEXT, site TEXT, status TEXT, statusColor TEXT)"
    );
  });
}

export const getAllContactsAsc = (database) => new Promise((resolve, reject) => {
  database.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM contacts ORDER BY name ASC",
      null,
      (_, resultSet) => {
        resolve(resultSet.rows._array);
      },
      (_, error) => {
        reject(error);
      }
    );
  });
})

export const addContact = ({ database, contactDetails }) => new Promise((resolve, reject) => {
  database.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO contacts (name, email, profilePic, github, companyName, position, site, status, statusColor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      Object.values(contactDetails),
      (_, __) => {
        resolve(true);
      },
      (_, error) => {
        reject(error);
      }
    );
  });
})
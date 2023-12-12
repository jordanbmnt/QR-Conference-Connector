import {
  addContact,
  createTable,
  getAllContactsAsc,
} from "./sqlHelperFunctions";

describe("SQL Helper function", function () {
  let mockDatabase;

  beforeEach(() => {
    mockDatabase = {
      transaction: jest.fn(),
      executeSql: jest.fn(),
    };

    mockDatabase.transaction.mockImplementation((callback) => {
      callback(mockDatabase);
    });
  });

  it("createTable should be called with necessary arguments", () => {
    createTable(mockDatabase);

    expect(mockDatabase.transaction).toHaveBeenCalled();
    expect(mockDatabase.executeSql).toHaveBeenCalledWith(
      "CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, position TEXT, email EMAIL, profilePic TEXT, github TEXT, companyName TEXT, site TEXT, status TEXT, statusColor TEXT)"
    );
  });

  it("addContact should be called with necessary arguments", () => {
    const info = {
      name: "john",
      email: "john@gmail.com",
      profilePic: "image",
      github: "github.com",
      companyName: "Umuzi",
      position: "Clerk",
      site: "",
      status: "ready",
      statusColor: "purple",
    };
    addContact({ database: mockDatabase, contactDetails: info });

    expect(mockDatabase.transaction).toHaveBeenCalled();
    expect(mockDatabase.executeSql).toHaveBeenCalledWith(
      `INSERT INTO contacts (name, email, profilePic, github, companyName, position, site, status, statusColor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      Object.values(info),
      expect.any(Function),
      expect.any(Function)
    );
  });

  it("getAllContactsAsc should be called with necessary arguments", () => {
    getAllContactsAsc(mockDatabase);

    expect(mockDatabase.transaction).toHaveBeenCalled();
    expect(mockDatabase.executeSql).toHaveBeenCalledWith(
      "SELECT * FROM contacts ORDER BY name ASC",
      null,
      expect.any(Function),
      expect.any(Function)
    );
  });
});

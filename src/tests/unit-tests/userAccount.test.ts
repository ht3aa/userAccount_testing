const fs = require("fs").promises;
const path = require("path");
const folderPath = path.join(__dirname, "../../services");

const createUserFile = path.join(folderPath, "createUser.ts");
const updateUserFile = path.join(folderPath, "updateUser.ts");
const deleteUserFile = path.join(folderPath, "deleteUser.ts");
const getUserFile = path.join(folderPath, "getUser.ts");
const getUsersFile = path.join(folderPath, "getUsers.ts");

describe("user account service files", () => {
  it(`should check if "createUserFile" exists in "src/services" directory`, async () => {
    try {
      await fs.access(createUserFile);
    } catch (err) {
      expect(err).toBe(null);
    }
  });
  it(`should check if "updateUserFile" exists in "src/services" directory`, async () => {
    try {
      await fs.access(updateUserFile);
    } catch (err) {
      expect(err).toBe(null);
    }
  });
  it(`should check if "deleteUserFile" exists in "src/services" directory`, async () => {
    try {
      await fs.access(deleteUserFile);
    } catch (err) {
      expect(err).toBe(null);
    }
  })
  it(`should check if "getUserFile" exists in "src/services" directory`, async () => {
    try {
      await fs.access(getUserFile);
    } catch (err) {
      expect(err).toBe(null);
    }
  })
  it(`should check if "getUsersFile" exists in "src/services" directory`, async () => {
    try {
      await fs.access(getUsersFile);
    } catch (err) {
      expect(err).toBe(null);
    }
  })
});

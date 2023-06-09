const FileService = require("../src/file/FileService");
const fs = require("fs");
const path = require("path");
const config = require("config");

const { uploadDir, profileDir } = config;

const profileFolder = path.join(".", uploadDir, profileDir);

describe("createFolders", () => {
  it("creates upload folder", () => {
    FileService.createFolders();
    expect(fs.existsSync(uploadDir)).toBe(true);
  });
  it("creates profile folder under upload folder", () => {
    FileService.createFolders();
    expect(fs.existsSync(profileFolder)).toBe(true);
  });
});

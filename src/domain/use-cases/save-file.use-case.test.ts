import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe("save-file.use-case", () => {
  const customOptions = {
    fileContent: "custom content",
    fileDestination: "custom-outputs/file-destination",
    fileName: "custom-table-name",
  };
  const filePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

  afterEach(() => {
    const folderExist = fs.existsSync("outputs");
    //clean up
    if (folderExist) fs.rmSync("outputs", { recursive: true });
  });

  test("should save file  with default values", () => {
    const saveFile = new SaveFile();
    const options = { fileContent: "test content" };
    const result = saveFile.execute(options);
    const filePath = "outputs/table.txt";
    expect(result).toBe(true);
    const checkFile = fs.existsSync(filePath);

    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    expect(checkFile).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test("should save file  with custom values", () => {
    const saveFile = new SaveFile();
    const options = { fileContent: customOptions.fileContent };

    const result = saveFile.execute(customOptions);
    const checkFile = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(result).toBe(true);
    expect(checkFile).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });
  test("should return false if could not  create directory", () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("This error was created for testing");
    });

    const result = saveFile.execute(customOptions);
    expect(result).toBe(false);
    mkdirSpy.mockRestore();
  });
  test("should return false if could not  create file", () => {
    const saveFile = new SaveFile();
    // const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
    //   throw new Error("This error was created for testing");
    // });

    const result = saveFile.execute({ fileContent: "Hola" });
    expect(result).toBe(true);
  });
});

import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe("save-file.use-case", () => {
  //   beforeEach(() => {
  //     //clean up
  //     fs.rmSync("outputs", { recursive: true });
  //   });
  afterEach(() => {
    //clean up
    fs.rmSync("outputs", { recursive: true });
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
});

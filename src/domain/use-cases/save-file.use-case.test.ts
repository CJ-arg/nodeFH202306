import { SaveFile } from "./save-file.use-case";

describe("save-file.use-case", () => {
  test("should save file  with default values", () => {
    const saveFile = new SaveFile();
    const options = { fileContent: "test content" };
    const result = saveFile.execute(options);

    // expect(rows).toBe(10);
  });
  //   test("should create table with custom values", () => {
  //     const createTable = new CreateTable();
  //     const options = { base: 3, limit: 20 };
  //     const tableCustom = createTable.execute(options);
  //     const rowsCustom = tableCustom.split("\n").length;

  //     expect(tableCustom).toContain("3 x 2 = 6");
  //     expect(tableCustom).toContain("3 x 11 = 33");
  //     expect(tableCustom).toContain("3 x 20 = 60");
  //     expect(rowsCustom).toBe(options.limit);
  //   });
});

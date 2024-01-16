import { CreateTable } from "./create-table.use-case";

describe("create-table.use-case", () => {
  test("should create table with default values", () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 6 });
    const rows = table.split("\n").length;

    // console.log(table);

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("6 x 2 = 12");
    expect(table).toContain("6 x 9 = 54");
    expect(rows).toBe(10);
  });
  test("should create table with custom values", () => {
    const createTable = new CreateTable();
    const options = { base: 3, limit: 20 };
    const tableCustom = createTable.execute(options);
    const rowsCustom = tableCustom.split("\n").length;
    console.log(tableCustom);
    expect(tableCustom).toContain("3 x 2 = 6");
    expect(rowsCustom).toBe(20);
  });
});

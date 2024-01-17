// import { yarg } from "./args.plugins";

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import("./args.plugins");
  return yarg;
};

describe("Test  args.plugins.ts", () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "multiplication-table",
        d: "outputs",
      })
    );
  });
  test("should return custom values", async () => {
    const argv = await runCommand([
      "-b",
      "5",
      "-l",
      "10",
      "-s",
      "-n",
      "custom-name",
      "-d",
      "custom-dir",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: true,
        n: "custom-name",
        d: "custom-dir",
      })
    );
  });
});

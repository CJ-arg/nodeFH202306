import { ServerApp } from "./server-app";

describe("server ", () => {
  test("should create server app instance", () => {
    const serverApp = new ServerApp();

    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });
});

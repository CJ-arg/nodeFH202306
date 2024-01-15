import { yarg } from "./plugins/args.plugins";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);
// console.log(yarg.b);

(async () => {
  await main();
})();

async function main() {
  console.log(yarg);

  ServerApp.run();
}

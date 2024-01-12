import { yarg } from "./plugins/args.plugins";

// console.log(process.argv);
// console.log(yarg.b);

(async () => {
  await main();
})();

async function main() {
  console.log(yarg);
}

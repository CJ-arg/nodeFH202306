import { yarg } from "./plugins/args.plugins";

// console.log(process.argv);
// console.log(yarg.b);

(async () => {
  await main();
  console.log("directo");
})();

async function main() {
  console.log("Main Ejecutado");
}

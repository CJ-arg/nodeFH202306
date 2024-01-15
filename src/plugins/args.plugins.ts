import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplication table base",
  })
  .options("l", {
    alias: "limit",
    type: "number",
    default: 11,
    describe: "Multiplication table limit",
  })
  .options("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show Multiplication table",
  })
  .options("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "File Name",
  })
  .options("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination",
  })
  .check((argv, options) => {
    // console.log({ argv, options });
    if (argv.b < 1) throw "Error: base must be grater than 0 ";
    return true;
  })

  .parseSync();

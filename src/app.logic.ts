import fs from "fs";
import { yarg } from "./plugins/args.plugins";

const { b: base, l: limit, s: show } = yarg;

let outputMessage = "";
const headerMessage = `
==================================
       Tabla del ${base}
==================================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (show) {
  console.log(outputMessage);
}

const outputPath = `outputs`;

fs.writeFileSync(`outputs/tabla-${base}.txt`, outputMessage);
console.log("File Created OK!!");

import fs from "fs";
import { yarg } from "./plugins/args.plugins";
const { b: base, l: limit, s: show } = yarg;

let outputMessage = "";
const lineLong: number = 0;
let lineItems: string = "";
const tableOf: number = base;
const lineMaker = (lineLong: number) => {
  for (let i = 0; i < lineLong; i += 1) {
    lineItems += "=";
  }
};
lineMaker(40);

const tableMaker = (till: number) => {
  for (let i = 1; i <= till; i += 1) {
    outputMessage += `   ${tableOf} X ${i} = ${tableOf * i}\n`;
  }
};

tableMaker(limit);
outputMessage = `${lineItems}  
                      Tabla del ${tableOf}
${lineItems}  

${outputMessage}  `;
if (show) console.log(outputMessage);

fs.writeFileSync(`outputs/tabla-${tableOf}.txt`, outputMessage);
console.log("File Created OK!!");

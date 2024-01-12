import fs from "fs";

let outputMessage = "";
const lineLong: number = 0;
let lineItems: string = "";
const tableOf: number = 7;
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

tableMaker(10);
outputMessage = `${lineItems}  
                      Tabla del ${tableOf}
${lineItems}  

${outputMessage}  `;

console.log(outputMessage);

fs.writeFileSync(`outputs/tabla-${tableOf}.txt`, outputMessage);
console.log("File Created OK!!");

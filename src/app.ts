const lineLong: number = 0;
let lineItems: string = "";

const lineMaker = (lineLong: number) => {
  for (let i = 0; i < lineLong; i += 1) {
    lineItems += "=";
  }
};
lineMaker(40);

const tableMaker = (tableOf: number, till: number) => {
  for (let i = 1; i < till + 1; i += 1) {
    console.log(`${tableOf} X ${i} = ${tableOf * i}`);
  }
};

console.log(lineItems);
console.log("          Tabla del 5");
console.log(lineItems);
tableMaker(5, 10);

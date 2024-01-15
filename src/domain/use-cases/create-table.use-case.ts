export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}
export interface CreateTableOptions {
  base: number;
  limit?: number;
}
export class CreateTable implements CreateTableUseCase {
  constructor() {} // DI - Dependency Injection
  execute({ base, limit = 5 }: CreateTableOptions) {
    let outputMessage = "";
    for (let i = 1; i <= limit; i += 1) {
      outputMessage += `   ${base} X ${i} = ${base * i}\n`;
    }
    return outputMessage;
  }
}

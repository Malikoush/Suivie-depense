import type { Category } from "./category";

export class Transaction {
    constructor(
        public id: number,
        public description: string,
        public date: Date,
        public amount: bigint,
        public categoryId: number
    ) { }
}

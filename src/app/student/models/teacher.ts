import { ShowStudent } from './showStudent';

export class Teacher {
    public _id: string;
    public payed: number[] = [0, 0];
    constructor(
        public name: string,
        public students: ShowStudent[],
    ){}
 
 }

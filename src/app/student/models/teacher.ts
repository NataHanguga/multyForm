import { ShowStudent } from './showStudent';

export class Teacher {
    constructor(
        public teacherName: string,
        public student: ShowStudent[]
    ) {}
}
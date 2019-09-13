import { Education } from './../education/education.model';
import { Grade } from './grade.model';
export class Status<T> {
    constructor(public id: string = null, public item: T = null) {}
}
import { PayArray } from './payArray';

export class Subject {
  constructor(
    public title: string,
    public teacher: string,
    public startDate: Date,
    public finishDate: Date,
    public pay: PayArray[]
  ) {}
}

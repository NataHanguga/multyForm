import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { Student } from './student';

@Serializable()
export class Teacher {
    @JsonProperty()
    public _id: string;
    @JsonProperty()
    public payed: number[] = [0, 0, 0];
    constructor(
        @JsonProperty()
        public name: string,
        @JsonProperty()
        public students: Student[],
    ) {}

 }

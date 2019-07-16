import { Subject } from './subject';
import { JsonProperty, Serializable } from 'typescript-json-serializer';

@Serializable()
export class Student {
  public id: number;
  constructor(
    @JsonProperty()
    public fullName: string,
    @JsonProperty()
    public classNumber: number,
    @JsonProperty()
    public studentType: string,
    @JsonProperty()
    public subject: Subject[],
  ) {
    this.id = Date.now();
  }
}

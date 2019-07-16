import { PayArray } from './payArray';
import { JsonProperty, Serializable } from 'typescript-json-serializer';

@Serializable()
export class ShowStudent {
  public id: number;
  constructor(
    @JsonProperty()
    public fullName: string,
    @JsonProperty()
    public classNumber: number,
    @JsonProperty()
    public studentType: string,
    @JsonProperty()
    public startDate: Date,
    @JsonProperty()
    public payArray: number
  ) {
    this.id =  Math.floor(Math.random() * (Date.now() - 5) + 5);
  }
}

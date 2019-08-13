import { PayArray } from './payArray';
import { JsonProperty, Serializable } from 'typescript-json-serializer';

@Serializable()
export class ShowStudent {
  public _id: number;

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
    public payArray: number,
    @JsonProperty()
    public progress?: number[],
    @JsonProperty()
    public payed?: boolean

  ) { }
}

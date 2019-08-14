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
    public startDate: Date,
    @JsonProperty()
    public pay: number,
    @JsonProperty()
    public progress?: number[],
    @JsonProperty()
    public payed?: boolean

  ) { }
}

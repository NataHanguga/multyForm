import { PayArray } from './payArray';
import { JsonProperty, Serializable } from 'typescript-json-serializer';

@Serializable()
export class ShowStudent {
  constructor(
    @JsonProperty()
    public fullNme: string,
    @JsonProperty()
    public classNumber: number,
    @JsonProperty()
    public studentType: string,
    @JsonProperty()
    public teacher: string,
    @JsonProperty()
    public payArray: PayArray[]
  ) {}
}

import { JsonProperty, Serializable } from 'typescript-json-serializer';

@Serializable()
export class PayArray{
    @JsonProperty()
    public payDate: number;

    constructor(
        @JsonProperty()
        public pay: number
    ) {
        this.payDate = (new Date()).getUTCDate();
    }
}
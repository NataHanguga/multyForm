import { JsonProperty, Serializable } from 'typescript-json-serializer';

@Serializable()
export class PayArray{
    constructor(
        @JsonProperty()
        public pay: number
    ) { }
}
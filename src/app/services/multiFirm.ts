import { FullName } from './fullName';
import { Address } from './address';
import { Phone } from './phone';

export class MultyForm {
  constructor(
    public fullName: FullName,
    public address: Address,
    public phone: Phone
  ) {}
}

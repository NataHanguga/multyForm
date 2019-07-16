import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MultiFormService } from 'src/app/services/multi-form.service';
import { Address } from 'src/app/services/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  public address: FormGroup = this.service.address;
  public streetValue: string;
  public cityValue: string;
  public stateValue: string;
  constructor(private service: MultiFormService) {}

  ngOnInit() {
    const written = this.service.getData();
    const data = (this.service.getAddress()).value as Address;

    if (written !== null && written === 'address') {
      this.address = this.service.getAddress();
    } else {
      this.address = this.service.address;
    }
    this.streetValue = data.street;
    this.cityValue = data.city;
    this.stateValue = data.state;
  }

  show() {
    this.service.setAddress(this.address);
  }
}

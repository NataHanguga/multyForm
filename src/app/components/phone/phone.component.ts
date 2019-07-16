import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MultiFormService } from 'src/app/services/multi-form.service';
import { Phone } from 'src/app/services/phone';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  public phoneNumber: FormGroup = this.service.phoneNumber;
  public numberValue: string;
  constructor(private service: MultiFormService) {}

  ngOnInit() {
    const written = this.service.getData();
    const data = this.service.getPhone().value as Phone;

    if (written !== null && written === 'phone') {
      this.phoneNumber = this.service.getPhone();
    } else {
      this.phoneNumber = this.service.phoneNumber;
    }
    this.numberValue = data.phoneNumber;
  }

  show() {
    this.service.setPhone(this.phoneNumber);
  }
}

import { Injectable } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { BehaviorSubject, pipe } from 'rxjs';
import { FullName } from './fullName';

@Injectable({
  providedIn: 'root'
})
export class MultiFormService {
  public fullName: FormGroup = this.fb.group({
    firstName: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(`^[a-zA-Z_-]{3,15}$`)
      ])
    ),
    secondName: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(`^[a-zA-Z_-]{3,15}$`)
      ])
    ),
    image: new FormControl(null, Validators.required)
  });
  public address: FormGroup = this.fb.group({
    street: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(`^[a-zA-Z -]{2,15}$`)
      ])
    ),
    city: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(`^[a-zA-Z -]{2,15}$`)
      ])
    ),
    state: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(`^[a-zA-Z -]{2,15}$`)
      ])
    )
  });
  public phoneNumber: FormGroup = this.fb.group({
    number: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(`^[0-9]{5,8}$`)
      ])
    )
  });
  public multyForm: FormGroup = this.fb.group({
    fulName: this.fullName.value,
    address: this.address.value,
    phone: this.phoneNumber.value
  });
  public subject = new BehaviorSubject(null);

  constructor(private fb: FormBuilder) {}

  setFullName(data: FormGroup): void {
    this.fullName = data;
    this.multyForm.value.fulName = data;
    this.subject.next('fullName');
  }

  getData(): string | null {
    const data = this.subject.value;

    if (data === 'fullName') {
      return 'fullName';
    } else if (data === 'address') {
      return 'address';
    } else if (data === 'phone') {
      return 'phone';
    } else {
      return null;
    }
  }

  getfullName(): FormGroup {
    return this.fullName;
  }

  setAddress(data: FormGroup): void {
    this.address = data;
    this.multyForm.value.address = this.address;
    this.subject.next('address');
  }

  getAddress(): FormGroup {
    return this.address;
  }

  setPhone(data: FormGroup): void {
    this.phoneNumber = data;
    this.multyForm.value.phone = this.phoneNumber;
  }

  getPhone(): FormGroup {
    return this.phoneNumber;
  }

  getFullData(): FormGroup {
    return this.multyForm.value;
  }

  // onFileChange(event, url: string): void {
  //   const files = event.target.files;
  //   if (files && files[0]) {
  //     const reader = new FileReader();

  //     reader.readAsDataURL(files[0]);

  //     reader.onload = (e: any) => {
  //       url = e.target.result;
  //     };
  //   }
  //   this.fullName.get('image').setValue(url);
  //   console.log(files, this.fullName.value);
  // }

  reset() {
    this.multyForm.reset();
    this.phoneNumber.reset();
    this.address.reset();
    this.fullName.reset();
    this.subject.next(null);
  }

    public complete(): void {
    document.getElementById('info').innerHTML =
      '<div> Full Name: ' +
      this.fullName.value.firstName +
      ' ' +
      this.fullName.value.secondName +
      '</div><div> Address: ' +
      this.address.value.street +
      ' St, ' +
      this.address.value.city +
      ', ' +
      this.address.value.state +
      '</div><div> Phone Number: +' +
      this.phoneNumber.value.number +
      '</div><div><img id="img" src="' + this.fullName.value.image + '"</div>';
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MultiFormService } from 'src/app/services/multi-form.service';
import { FullName } from 'src/app/services/fullName';

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.scss']
})
export class FullNameComponent implements OnInit {
  public fullName: FormGroup = this.service.fullName;
  public firstNameValue: string;
  public secondNameValue: string;
  public url: string;
  constructor(private service: MultiFormService) {}

  ngOnInit() {
    const written = this.service.getData();
    const data = this.service.getfullName().value as FullName;

    if (written !== null && written === 'fullName') {
      this.fullName = this.service.getfullName();
    } else {
      this.fullName = this.service.fullName;
    }
    this.firstNameValue = data.firstName;
    this.secondNameValue = data.secondName;
  }

  show() {
    this.service.setFullName(this.fullName);
  }

  onFileChange(event): void {

    const files = event.target.files;
    if (files && files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);

      reader.onload = (e: any) => {
        this.url = e.target.result;
        console.log(e);
        this.fullName.get('image').setValue(this.url);
        console.log(files, this.fullName.value);
      };
    }

  }
}

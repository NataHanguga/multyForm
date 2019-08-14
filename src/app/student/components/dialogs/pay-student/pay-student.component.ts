import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/student/models/Student';

@Component({
  selector: 'app-pay-student',
  templateUrl: './pay-student.component.html',
  styleUrls: ['./pay-student.component.scss']
})
export class PayStudentComponent implements OnInit {
  @Input() display: boolean;
  @Input() student: Student;
  @Output() closeDialog = new EventEmitter();
  @Output() list = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public cancel(): void {
    this.closeDialog.emit();
  }
  public saveStudentPay(value) {
    console.log(value, this.student.pay);
    this.student.pay += Number(value);
    this.list.emit(this.student);
  }
}

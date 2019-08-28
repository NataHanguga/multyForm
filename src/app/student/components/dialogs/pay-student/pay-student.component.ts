import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/student/models/student';

@Component({
  selector: 'app-pay-student',
  templateUrl: './pay-student.component.html',
  styleUrls: ['./pay-student.component.scss']
})
export class PayStudentComponent {
  @Input() display: boolean;
  @Input() student: Student;
  @Output() closeDialog = new EventEmitter();
  @Output() list = new EventEmitter();
  constructor() { }

  public cancel(): void {
    this.closeDialog.emit();
  }
  public saveStudentPay(value) {
    this.student.pay += Number(value);
    this.list.emit(this.student);
  }
}

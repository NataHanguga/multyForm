import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/student/models/student';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  @Input() display: boolean;
  @Input() student: Student;
  @Output() closeDialog = new EventEmitter();
  @Output() list = new EventEmitter();
  public fullName = '';
  public classNumber = 0;
  public date: Date = new Date();
  public types: SelectItem[] = [
    { label: 'Contract', value: 'contract' },
    { label: 'Beneficiary', value: 'beneficiary' }
  ];
  public selectedStudentType = '';
  constructor() { }

  ngOnInit() {
    this.fullName = this.student.fullName;
    this.classNumber = this.student.classNumber;
    this.date = new Date(this.student.startDate);
    this.selectedStudentType = this.student.studentType;
  }


  public cancel(): void {
    this.fullName = '';
    this.classNumber = 0;
    this.date = new Date();
    this.selectedStudentType = '';
    this.closeDialog.emit(!this.display);
  }

  public saveEditStudent(): void {
    const editStudent = {
      fullName: this.fullName,
      classNumber: this.classNumber,
      studentType: this.selectedStudentType,
      startDate: this.date.toLocaleDateString('en-US'),
      pay: this.student.pay,
      id: this.student.id
    };
    this.list.emit(editStudent);
    this.cancel();
  }
}

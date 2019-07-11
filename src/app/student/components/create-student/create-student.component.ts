import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { FormGroup, FormArray } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  public studentForm: FormGroup = this.studentService.student;
  // public subjectForm: FormGroup = this.studentService.initialSubject();
  public  types: SelectItem[] = [
    {label: 'Contract', value: 'contract'},
    {label: 'Beneficiary', value: 'beneficiary'}
  ];
  public selectType = this.types[0].value;
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentForm.reset();
  }

  addNewSubject(): void {
    this.studentService.addSubject();
  }

  removeSubject(i: number): void {
    this.studentService.removeSubject(i);
  }

  save(data: FormGroup) {
    data.controls.type.setValue(this.selectType);
    console.log(data);
    let length = this.studentService.saveStudent(data);
    while (length !== 0) {
      (this.studentForm.controls.subject as FormArray).removeAt(length);
      length--;
    }
    this.studentForm.reset();

  }

}

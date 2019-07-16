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
  public teacherForm: FormGroup = this.studentService.teacherForm;
  public  types: SelectItem[] = [
    {label: 'Contract', value: 'contract'},
    {label: 'Beneficiary', value: 'beneficiary'}
  ];
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.teacherForm.reset();
  }

  addNewStudent(): void {
    this.studentService.addStudent();
  }

  removeSubject(i: number): void {
    this.studentService.removeSubject(i);
  }

  save(data: FormGroup) {
    console.log(data.value.students);
    let length = this.studentService.saveStudent(data);
    while (length !== 0) {
      (this.teacherForm.controls.students as FormArray).removeAt(length);
      length--;
    }
    this.teacherForm.reset();

  }

}

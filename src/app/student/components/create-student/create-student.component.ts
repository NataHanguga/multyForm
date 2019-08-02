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
  public students: FormGroup = this.studentService.initialSubject();
  public display = false;
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

  public save(data: FormGroup): void {
    this.studentService.saveStudent(data);
    this.cancel();

  }

  public cancel(): void {
    this.display = false;
    this.teacherForm.reset();
  }

}

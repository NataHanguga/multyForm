import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { FormGroup, FormArray } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  @Output() created: EventEmitter<any> = new EventEmitter<any>();
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

    public save(data: FormGroup): void {
        this.created.emit(data.value.name);
        this.cancel();

    }

  public cancel(): void {
    this.display = false;
    this.teacherForm.reset();
  }

}

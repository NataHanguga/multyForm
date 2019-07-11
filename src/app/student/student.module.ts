import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimeModule } from '../prime/prime.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateStudentComponent } from './components/create-student/create-student.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './components/student/student.component';
import { ShowStudentsComponent } from './components/show-students/show-students.component';

@NgModule({
  declarations: [CreateStudentComponent, StudentComponent, ShowStudentsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    PrimeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimeModule } from '../prime/prime.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateStudentComponent } from './components/dialogs/create-student/create-student.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentsComponent } from './components/show-students/show-students.component';
import { TeacherCellComponent } from './components/teacher-cell/teacher-cell.component';
import { StudentRowComponent } from './components/student-row/student-row.component';
import { DeleteTeacherComponent } from './components/dialogs/delete-teacher/delete-teacher.component';
import { HttpClientModule } from '@angular/common/http';
import { TeacherCellMenuComponent } from './components/menu/teacher-cell-menu/teacher-cell-menu.component';
import { EditTeacherComponent } from './components/dialogs/edit-teacher/edit-teacher.component';
import { AddStudentComponent } from './components/dialogs/add-student/add-student.component';
import { PayedTableComponent } from './components/dialogs/payed-table/payed-table.component';
import { StudentRowMenuComponent } from './components/menu/student-row-menu/student-row-menu.component';
import { EditStudentComponent } from './components/dialogs/edit-student/edit-student.component';
import { PayStudentComponent } from './components/dialogs/pay-student/pay-student.component';
@NgModule({
  declarations: [
    CreateStudentComponent,
    StudentsComponent,
    TeacherCellComponent,
    StudentRowComponent,
    DeleteTeacherComponent,
    TeacherCellMenuComponent,
    EditTeacherComponent,
    AddStudentComponent,
    PayedTableComponent,
    StudentRowMenuComponent,
    EditStudentComponent,
    PayStudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    PrimeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class StudentModule { }

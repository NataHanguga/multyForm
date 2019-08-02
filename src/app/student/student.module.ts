import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimeModule } from '../prime/prime.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateStudentComponent } from './components/create-student/create-student.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './components/student/student.component';
import { ShowStudentsComponent } from './components/show-students/show-students.component';
import { FilterDirective } from './directives/filter.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { TeacherCellComponent } from './components/teacher-cell/teacher-cell.component';
import { StudentRowComponent } from './components/student-row/student-row.component';
import { ProgressTableComponent } from './components/progress-table/progress-table.component';
import { DeleteTeacherComponent } from './components/dialogs/delete-teacher/delete-teacher.component';

@NgModule({
  declarations: [CreateStudentComponent, StudentComponent, ShowStudentsComponent, FilterDirective, FilterPipe, TeacherCellComponent, StudentRowComponent, ProgressTableComponent, DeleteTeacherComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    PrimeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { StudentComponent } from './components/student/student.component';
import { ShowStudentsComponent } from './components/show-students/show-students.component';

const routes: Routes = [
    {
        path: '',
        component: StudentComponent
    },
    {
        path: 'create',
        component: CreateStudentComponent,
        pathMatch: 'full'
    },
    {
        path: 'create?**',
        redirectTo: 'create'
    },
    {
        path: 'showStudents',
        component: ShowStudentsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule {}
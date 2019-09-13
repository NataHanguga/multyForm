import { TeacherCategoriesComponent } from './components/teacher-categories/teacher-categories.component';
import { PayConstantComponent } from './components/pay-constant/pay-constant.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EducationComponent } from './components/education/education.component';

const routes: Routes = [
    {
        path: '', children: [
            { path: 'pay-constant', component: PayConstantComponent },
            { path: 'teacher-categories', component: TeacherCategoriesComponent},
            { path: 'education', component: EducationComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingRoutingModule { }

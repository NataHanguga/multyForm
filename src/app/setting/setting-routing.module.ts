import { TeacherCategoriesComponent } from './components/teacher-categories/teacher-categories.component';
import { PayConstantComponent } from './components/pay-constant/pay-constant.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EducationComponent } from './components/education/education.component';
import { PercentComponent } from './components/percent/percent.component';
import { PositionComponent } from './components/position/position.component';
import { RankComponent } from './components/rank/rank.component';
import { CategoryComponent } from './components/category/category.component';
import { AdditionalPositionComponent } from './components/additional-position/additional-position.component';

const routes: Routes = [
    {
        path: '', children: [
            { path: 'pay-constant', component: PayConstantComponent },
            { path: 'grade', component: TeacherCategoriesComponent},
            { path: 'education', component: EducationComponent },
            { path: 'percent', component: PercentComponent },
            { path: 'position', component: PositionComponent },
            { path: 'rank', component: RankComponent },
            { path: 'category', component: CategoryComponent },
            { path: 'add-position', component: AdditionalPositionComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingRoutingModule { }

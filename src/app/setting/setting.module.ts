import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SettingRoutingModule } from './setting-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayConstantComponent } from './components/pay-constant/pay-constant.component';
import { EditPayConstantComponent } from './components/pay-constant/edit-pay-constant/edit-pay-constant.component';
import { PrimeModule } from '../prime/prime.module';
import { TeacherCategoriesComponent } from './components/teacher-categories/teacher-categories.component';
import { AddTeacherCategoriesComponent } from './components/teacher-categories/add-teacher-categories/add-teacher-categories.component';
import { EducationComponent } from './components/education/education.component';
import { AddEducationComponent } from './components/education/add-education/add-education.component';
import { PercentComponent } from './components/percent/percent.component';
import { AddPercentComponent } from './components/percent/add-percent/add-percent.component';
import { PositionComponent } from './components/position/position.component';
import { AddPositionComponent } from './components/position/add-position/add-position.component';
import { RankComponent } from './components/rank/rank.component';
import { AddRankComponent } from './components/rank/add-rank/add-rank.component';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AdditionalPositionComponent } from './components/additional-position/additional-position.component';
import { AddAdditionalPositionComponent } from './components/additional-position/add-additional-position/add-additional-position.component';
/*
 .use('/position', positionRoutes)+
    .use('/grade', gradeRoutes) +
    .use('/percent', percentRoutes) +
    .use('/pay', studentPayRoutes) +
    .use('/category', teacherCategoryRoutes)
    .use('/rank', teacherRankRoutes) +
    .use('/education', educationRoutes) +
    .use('/additional-position', additionalPositionRoutes)
*/
@NgModule({
  declarations: [
    PayConstantComponent,
    EditPayConstantComponent,
    TeacherCategoriesComponent,
    AddTeacherCategoriesComponent,
    EducationComponent,
    AddEducationComponent,
    PercentComponent,
    AddPercentComponent,
    PositionComponent,
    AddPositionComponent,
    RankComponent,
    AddRankComponent,
    CategoryComponent,
    AddCategoryComponent,
    AdditionalPositionComponent,
    AddAdditionalPositionComponent
    ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    HttpClientModule,
    PrimeModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingModule { }

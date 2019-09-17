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
// import { PositionComponent } from './components/position/position.component';
// import { AddPositionComponent } from './components/position/add-position/add-position.component';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AdditionalPositionComponent } from './components/additional-position/additional-position.component';
import { AddAdditionalPositionComponent } from './components/additional-position/add-additional-position/add-additional-position.component';
import { SettingComponent } from './components/setting/setting.component';
// import { AddSettingComponent } from './components/setting/add-setting.component';

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
    // PositionComponent,
    // AddPositionComponent,
    // AddSettingComponent,
    CategoryComponent,
    AddCategoryComponent,
    AdditionalPositionComponent,
    AddAdditionalPositionComponent,
    SettingComponent
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

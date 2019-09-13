import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SettingRoutingModule } from './setting-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { PayConstantComponent } from './components/pay-constant/pay-constant.component';
import { EditPayConstantComponent } from './components/pay-constant/edit-pay-constant/edit-pay-constant.component';
import { PrimeModule } from '../prime/prime.module';
import { TeacherCategoriesComponent } from './components/teacher-categories/teacher-categories.component';
import { AddTeacherCategoriesComponent } from './components/teacher-categories/add-teacher-categories/add-teacher-categories.component';
import { EducationComponent } from './components/education/education.component';
import { AddEducationComponent } from './components/education/add-education/add-education.component';

@NgModule({
  declarations: [
    SettingsComponent,
    PayConstantComponent,
    EditPayConstantComponent,
    TeacherCategoriesComponent,
    AddTeacherCategoriesComponent,
    EducationComponent,
    AddEducationComponent
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

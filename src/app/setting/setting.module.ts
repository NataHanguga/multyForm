import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SettingRoutingModule } from './setting-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayConstantComponent } from './components/pay-constant/pay-constant.component';
import { EditPayConstantComponent } from './components/pay-constant/edit-pay-constant/edit-pay-constant.component';
import { PrimeModule } from '../prime/prime.module';
import { SettingComponent } from './components/setting/setting.component';

@NgModule({
  declarations: [
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

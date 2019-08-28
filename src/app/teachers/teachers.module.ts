import { SharedModule } from './../shared/shared.module';
import { PrimeModule } from './../prime/prime.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRoutingModule } from './teachers-routing.module';
import { ShowTeachersComponent } from './components/show-teachers/show-teachers.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ShowTeachersComponent, CreateEmployeeComponent],
    imports: [
        CommonModule,
        TeachersRoutingModule,
        PrimeModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class TeachersModule { }

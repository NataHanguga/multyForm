import { AddEducationComponent } from './add-education/add-education.component';
import { SharedModule } from './../../../shared/shared.module';
import { PrimeModule } from './../../../prime/prime.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './education.component';
const routes: Routes = [
    {path: '', component: EducationComponent }
];
@NgModule({
    declarations: [EducationComponent, AddEducationComponent],
    imports: [
        PrimeModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
     ],
    exports: [],
    providers: [],
})
export class EducationModule {}

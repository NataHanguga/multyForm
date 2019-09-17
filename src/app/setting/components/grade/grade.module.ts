import { AddGradeComponent } from './add-teacher-categories/add-grade.component';
import { GradeComponent } from './grade.component';
import { SharedModule } from './../../../shared/shared.module';
import { PrimeModule } from './../../../prime/prime.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
    {path: '', component: GradeComponent }
];
@NgModule({
    declarations: [GradeComponent, AddGradeComponent],
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
export class PositionModule {}

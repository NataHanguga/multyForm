import { PercentComponent } from './percent.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';
import { PrimeModule } from './../../../prime/prime.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPercentComponent } from './add-percent/add-percent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {path: '', component: PercentComponent }
];

@NgModule({
    declarations: [PercentComponent, AddPercentComponent],
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
export class PercentModule {}

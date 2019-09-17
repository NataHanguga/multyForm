import { EditPayConstantComponent } from './edit-pay-constant/edit-pay-constant.component';
import { PayConstantComponent } from './pay-constant.component';
import { SharedModule } from './../../../shared/shared.module';
import { PrimeModule } from './../../../prime/prime.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
    {path: '', component: PayConstantComponent }
];
@NgModule({
    declarations: [PayConstantComponent, EditPayConstantComponent],
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
export class PayConstantModule {}

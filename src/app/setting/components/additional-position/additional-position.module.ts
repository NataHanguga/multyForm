import { AdditionalPositionComponent } from './additional-position.component';
import { AddAdditionalPositionComponent } from './add-additional-position/add-additional-position.component';
import { SharedModule } from './../../../shared/shared.module';
import { PrimeModule } from './../../../prime/prime.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
    {path: '', component: AdditionalPositionComponent }
];
@NgModule({
    declarations: [AdditionalPositionComponent, AddAdditionalPositionComponent],
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
export class AdditionalPositionModule {}

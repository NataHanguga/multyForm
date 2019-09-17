import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryComponent } from './category.component';
import { SharedModule } from './../../../shared/shared.module';
import { PrimeModule } from './../../../prime/prime.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
    {path: '', component: CategoryComponent }
];
@NgModule({
    declarations: [CategoryComponent, AddCategoryComponent],
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
export class CategoryModule {}

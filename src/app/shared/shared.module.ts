import { FormsModule } from '@angular/forms';
import { BoolCheckboxComponent } from './components/bool-checkbox/bool-checkbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from '../prime/prime.module';

@NgModule({
  declarations: [BoolCheckboxComponent],
  imports: [
    CommonModule,
    PrimeModule,
    FormsModule
  ],
  exports: [BoolCheckboxComponent]
})
export class SharedModule { }

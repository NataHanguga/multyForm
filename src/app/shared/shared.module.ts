import { FormsModule } from '@angular/forms';
import { BoolCheckboxComponent } from './components/bool-checkbox/bool-checkbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from '../prime/prime.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FloatInputComponent } from './components/float-input/float-input.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';

@NgModule({
  declarations: [
    BoolCheckboxComponent,
    DropdownComponent,
    FloatInputComponent,
    SaveButtonComponent,
    CancelButtonComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    FormsModule
  ],
  exports: [
    BoolCheckboxComponent,
    DropdownComponent,
    FloatInputComponent,
    SaveButtonComponent,
    CancelButtonComponent

  ]
})
export class SharedModule { }

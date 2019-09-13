import { FormsModule } from '@angular/forms';
import { BoolCheckboxComponent } from './components/bool-checkbox/bool-checkbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from '../prime/prime.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FloatInputComponent } from './components/float-input/float-input.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';
import { ModalRemoveComponent } from './components/modal-remove/modal-remove.component';

@NgModule({
  declarations: [
    BoolCheckboxComponent,
    DropdownComponent,
    FloatInputComponent,
    SaveButtonComponent,
    CancelButtonComponent,
    ModalRemoveComponent
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
    CancelButtonComponent,
    ModalRemoveComponent

  ]
})
export class SharedModule { }

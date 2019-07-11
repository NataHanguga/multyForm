import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddressComponent } from './components/address/address.component';
import { PhoneComponent } from './components/phone/phone.component';
import { FullNameComponent } from './components/full-name/full-name.component';
import { MultiFormComponent } from './components/multi-form/multi-form.component';
import { ResultComponent } from './components/result/result.component';
import { EditorComponent } from './components/editor/editor.component';
import { StudentModule } from './student/student.module';
import { PrimeModule } from './prime/prime.module';
import { HeaderComponent } from './layout/header/header.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StudentModule,
    PrimeModule
  ],
  declarations: [
    AppComponent,
    AddressComponent,
    PhoneComponent,
    FullNameComponent,
    MultiFormComponent,
    ResultComponent,
    EditorComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
    HeaderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';

import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { StepsModule } from 'primeng/steps';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { EditorModule } from 'primeng/editor';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';
@NgModule({
  imports: [
    ToastModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    StepsModule,
    MessagesModule,
    MessageModule,
    EditorModule,
    DataViewModule,
    TableModule,
    SelectButtonModule
  ],
  exports: [
    ToastModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    StepsModule,
    MessagesModule,
    MessageModule,
    EditorModule,
    DataViewModule,
    TableModule,
    SelectButtonModule
  ]
})
export class PrimeModule {}

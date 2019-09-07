import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule, AutoCompleteModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@NgModule({
  imports: [
    DataTableModule,
    TableModule,
    AutoCompleteModule,
    MenuModule
  ],
  declarations: [],
  exports: [
    DataTableModule,
    TableModule,
    AutoCompleteModule,
    MenuModule
  ]
})
export class PrimengServiceModule { }

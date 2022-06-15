import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTwoComponent } from './table-two/table-two.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  {
    path: 'view',component: TableTwoComponent
  }
]

@NgModule({
  declarations: [
    TableTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Table2Module { }

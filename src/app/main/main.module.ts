import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: '',component: MainComponent,
  },
  {
    path:'table',component:TableComponent
  },
  {
    path:'grid',component:GridComponent
  }
];

@NgModule({
  declarations: [
    MainComponent,
    TableComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class MainModule { }

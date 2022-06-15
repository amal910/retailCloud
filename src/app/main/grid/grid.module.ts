import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  {
    path: 'view',component: GridComponent 
  },
]

@NgModule({
  declarations: [
    GridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class GridModule { }

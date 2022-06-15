import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
  path: '', component: MainComponent,
  },
  {
    path: 'table', loadChildren: () => import('./table/table.module').then(mod => mod.TableModule),
  },
  {
    path: 'grid', loadChildren: () => import('./grid/grid.module').then(mod => mod.GridModule),
  },
  {
    path: 'table-two', loadChildren: () => import('./table-2/table-2.module').then(mod => mod.Table2Module),
  }
];

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class MainModule { }

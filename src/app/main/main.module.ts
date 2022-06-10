import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiComponent } from './api/api.component';
import { CsvComponent } from './csv/csv.component';

const routes: Routes = [
  {
    path: '',component: MainComponent,
  },
  {
    path:'api',component:ApiComponent
  },
  {
    path:'csv',component:CsvComponent
  }
];

@NgModule({
  declarations: [
    MainComponent,
    ApiComponent,
    CsvComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class MainModule { }

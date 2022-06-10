import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('./main/main.module'))
        .MainModule,
  },
  // {
  //   path: 'table',
  //   loadChildren: async () =>
  //     (await import('./components/main/table/table.module'))
  //       .TableModule,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

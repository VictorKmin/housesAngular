import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllHouseComponent} from './all-house/all-house.component';

const routes: Routes = [
  {path: 'allhouse', component: AllHouseComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

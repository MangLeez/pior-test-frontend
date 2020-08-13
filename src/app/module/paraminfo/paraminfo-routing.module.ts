import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParaminfoComponent } from './paraminfo.component';


const routes: Routes = [
  { path:'', component: ParaminfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParaminfoRoutingModule { }

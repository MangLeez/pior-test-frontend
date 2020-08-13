import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamgroupComponent } from './paramgroup.component';


const routes: Routes = [
  { path: '', component: ParamgroupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamgroupRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './core/app-layout/app-layout.component';


const routes: Routes = [

  { path: '' ,component:AppLayoutComponent,
children:[
   { path : 'paramgroup',
  loadChildren:()=> import('./module/paramgroup/paramgroup.module').then(mod => mod.ParamgroupModule)},
  { path : 'paraminfo',
  loadChildren:()=> import('./module/paraminfo/paraminfo.module').then(mod => mod.ParaminfoModule)}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

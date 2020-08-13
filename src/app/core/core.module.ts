import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [AppHeaderComponent, AppLayoutComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ]
})
export class CoreModule { }

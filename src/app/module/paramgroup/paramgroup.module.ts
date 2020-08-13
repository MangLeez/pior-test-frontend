import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamgroupRoutingModule } from './paramgroup-routing.module';
import { ParamgroupComponent } from './paramgroup.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [ParamgroupComponent],
  imports: [
    CommonModule,
    ParamgroupRoutingModule,
    MaterialModule
  ]
})
export class ParamgroupModule { }

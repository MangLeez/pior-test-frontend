import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParaminfoRoutingModule } from './paraminfo-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ParaminfoComponent } from './paraminfo.component';


@NgModule({
  declarations: [ParaminfoComponent],
  imports: [
    CommonModule,
    ParaminfoRoutingModule,
    MaterialModule
  ]
})
export class ParaminfoModule { }

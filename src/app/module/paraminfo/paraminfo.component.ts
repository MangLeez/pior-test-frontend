import { Component, OnInit } from '@angular/core';
import { ParaminfoService } from 'src/app/core/services/paraminfo/paraminfo.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-module-paraminfo',
  templateUrl: './paraminfo.component.html',
  styleUrls: ['./paraminfo.component.scss']
})
export class ParaminfoComponent implements OnInit {
  displayedColumns: string[] = ['paramgroupId', 'paramCode', 'paramEnDescription', 'paramLocalDescription','action'];
  dataSource: MatTableDataSource<any>;
 constructor(
   public paraminfoService : ParaminfoService
 ) { }

 ngOnInit(): void {
  this.getinfotData();
 
 }
 getinfotData() {
   console.log("test");
   this.paraminfoService.inquiryAllParams().subscribe(res => {
     console.log("test");
       this.dataSource = new MatTableDataSource(res);
     console.log(this.dataSource);
   });
 }
}

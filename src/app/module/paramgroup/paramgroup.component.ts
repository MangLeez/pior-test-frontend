import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ParamgroupserviceService } from 'src/app/core/services/paramgroup/paramgroupservice.service';


@Component({
  selector: 'app-module-paramgroup',
  templateUrl: './paramgroup.component.html',
  styleUrls: ['./paramgroup.component.scss']
})
export class ParamgroupComponent implements OnInit {
   displayedColumns: string[] = ['paramgroupId', 'paramGroup', 'paramEnDescription', 'paramLocalDescription','action'];
   dataSource: MatTableDataSource<any>;
  constructor(
    public paramGroupService : ParamgroupserviceService
  ) { }

  ngOnInit(): void {
   this.getWeightData();
  
  }
  getWeightData() {
    console.log("test");
    this.paramGroupService.inquiryAllParams().subscribe(res => {
      console.log("test");
        this.dataSource = new MatTableDataSource(res);
      console.log(this.dataSource);
    });
  }
}

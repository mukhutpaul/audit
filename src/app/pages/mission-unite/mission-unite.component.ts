import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-mission-unite',
  templateUrl: './mission-unite.component.html',
  styleUrls: ['./mission-unite.component.css']
})
export class MissionUniteComponent implements OnInit{
  constructor( private ngxService : NgxUiLoaderService,private toastr: ToastrService){}
  ngOnInit(): void {
    this.ngxService.start()
    this.ngxService.stop()
    this.toastr.success('ça marche!!');
  
    }

  tableData(){

    this.ngxService.stop()
  
  }

}

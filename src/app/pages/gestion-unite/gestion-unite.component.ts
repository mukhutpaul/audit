import { Component,OnInit, ViewChild  } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-gestion-unite',
  templateUrl: './gestion-unite.component.html',
  styleUrls: ['./gestion-unite.component.css']
})
export class GestionUniteComponent implements OnInit {
  //@ViewChild(MatPaginator) paginator: MatPaginator  = <MatPaginator>{};
  //@ViewChild(MatSort) sort: MatSort  = <MatSort>{};

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

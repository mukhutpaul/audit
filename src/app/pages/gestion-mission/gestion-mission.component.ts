import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-gestion-mission',
  templateUrl: './gestion-mission.component.html',
  styleUrls: ['./gestion-mission.component.css']
})
export class GestionMissionComponent implements OnInit {
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

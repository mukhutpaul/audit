import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-detail-audit',
  templateUrl: './detail-audit.component.html',
  styleUrls: ['./detail-audit.component.css']
})
export class DetailAuditComponent implements OnInit{

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

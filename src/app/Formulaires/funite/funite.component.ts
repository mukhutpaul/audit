import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-funite',
  templateUrl: './funite.component.html',
  styleUrls: ['./funite.component.css']
})
export class FUniteComponent implements OnInit{

name:string="";
sendCatalog:boolean=false;
uniteForm: any = FormGroup;
constructor(private formBuilder:FormBuilder){} 

ngOnInit(): void {
  this.uniteForm = this.formBuilder.group({
    name:['',[Validators.required]],
    sendCatalog:''

  })
}

saveData(){

}

}


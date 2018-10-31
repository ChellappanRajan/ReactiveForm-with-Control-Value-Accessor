import { Component, OnInit, Input } from '@angular/core';

import { FormGroup , FormControl , FormArray , FormBuilder, ControlContainer,  FormGroupDirective } from '@angular/forms'; 

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  viewProviders:[{ provide:ControlContainer , useExisting:FormGroupDirective}]
})
export class AddressComponent implements OnInit {
    
  form:FormGroup;
 
  constructor(private fgd:FormGroupDirective) {
     this.fgd.form;
     console.log(this.fgd.form);
   
   }

  ngOnInit() {
    this.fgd.form.addControl('address',new FormGroup({
        address1:new FormControl(''),
        address2:new FormControl(''),
        city:new FormControl(''),
        state:new FormControl(''),
        zip:new FormControl('')
    }))


    // this.address=this.fb.group({
    //   address1:'',
    //   address2:'',
    //   city:'',
    //   state:'',
    //   zip:''
    // });

  }

}

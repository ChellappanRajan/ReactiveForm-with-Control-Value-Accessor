import { Component , OnInit } from '@angular/core';

import { FormGroup , FormControl , FormArray , FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cva';
  form:FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(){
  this.form=this.fb.group({
    email:'',
    password:'',
    check:''
  })
  }



}

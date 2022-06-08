import { Component, OnInit } from '@angular/core';
import { Employee } from './bind-data';

@Component({
  selector: 'app-bind-dropdown',
  templateUrl: './bind-dropdown.component.html',
  styleUrls: ['./bind-dropdown.component.css']
})
export class BindDropdownComponent implements OnInit {

  employee:Employee[];
  employeeSelected:Number;
  modifiedText:string;

  constructor() { }

  ngOnInit() {
    // initialise employee array
    this.employee = [
      {Id:1,Name:"Kshitij"},
      {Id:2,Name:"Vicky"},
      {Id:3,Name:"Jem"},
      {Id:4,Name:"Vicco"},
    ]

    this.employeeSelected = 3;

    
  }
  onEmployeeSelected(val:any){
    // web Api
    this.customFunction(val)
  }

  customFunction(val:any){
      this.modifiedText ="The value" + val + "was selected from dropdown";
  }

}

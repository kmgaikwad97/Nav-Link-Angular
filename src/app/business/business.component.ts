import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private service:NewsapiserviceService) { }

  bussinessnewsDisplay:any = [];

  ngOnInit() {
    this.service.businessNews().subscribe((result)=>{
      // console.log(result);
      this.bussinessnewsDisplay = result.articles;  
    })
  }

}

  import { Component, OnInit } from '@angular/core';
  import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private service:NewsapiserviceService) { }

  technewsDisplay:any = [];

  ngOnInit() {

    this.service.techNews().subscribe((result)=>{
      // console.log(result);
      this.technewsDisplay = result.articles;  
    })
  }

}

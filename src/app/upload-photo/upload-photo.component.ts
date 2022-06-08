import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(() => {
      console.log("Jquery is working 2")
      //menu clicking
      $('.avtar-img-no-border').click(function () {
        $(".avtar-img-no-border").removeClass("avtar-img-border")
        $(this).addClass('avtar-img-border')
        //console.log($(this))
      })
    }
    )


  }

  selectedAvtar:String = ''
  avtarStyle:any = "avtar-default"

  avtarData=[
    {id:'rad1',value:"Avtar1", img:"../../assets/avtars/1.jpg"},
    {id:'rad2',value:"Avtar2",img:"../../assets/avtars/2.jpg"},
    {id:'rad3',value:"Avtar3",img:"../../assets/avtars/3.jpg"},
    {id:'rad4',value:"Avtar4",img:"../../assets/avtars/4.jpg"},
    {id:'rad5',value:"Avtar5",img:"../../assets/avtars/5.jpg"},
    {id:'rad6',value:"Avtar6",img:"../../assets/avtars/6.jpg"}
  ]
  avatarindex:any=1
  finalavtar:any=""
  imgvalue=this.avtarData[0].img
  saveCahanges(){
    console.log(this.avatarindex);
    switch(this.avatarindex){
      case 1: {
        this.imgvalue = this.avtarData[1].img
        break;
      }
      case 2: {
        this.imgvalue = this.avtarData[2].img
        break;
      }
      case 3: {
        this.imgvalue = this.avtarData[3].img
        break;
      }
      case 4: {
        this.imgvalue = this.avtarData[4].img
        break;
      }
      case 5: {
        this.imgvalue = this.avtarData[5].img
        break;
      }
      case 6: {
        this.imgvalue = this.avtarData[6].img
        break;
      }
       default:{
        this.imgvalue = this.avtarData[0].img
        break;
      }
    }
    console.log(this.avatarindex);  
  }

  avtarChange(event:any,i){
    console.log(i);
    this.avatarindex=i
    // this.avtarStyle = 'avtar-change'
    // update the img
    this.selectedAvtar = event.target.value; 
    // console.log(event);
    // console.log(event.target.nextElementSibling.nextElementSibling);    
    // console.log(this.selectedAvtar);
    // console.log(event.target.nextElementSibling.nextElementSibling.firstChild.src);    
    // this.finalavtar = event.target.nextElementSibling.nextElementSibling.firstChild.src
    // console.log(this.finalavtar);
    // this.avtarStyle = 'avtar-change'; 
      
    }

}

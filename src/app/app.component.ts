import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nav-links';
  primary=true
  secondary=false
  success=false
  danger=false
  form=false
  News=false
  pdf=false
  bind=false
  uploadphoto=false

// Form Data using Array

usersfile:any = []
getData(data:NgForm){
  console.warn(data);
  this.usersfile.push(data)
}





  // pdfSrc="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwih-qmG2YL4AhWRPHAKHctlB2YQFnoECAcQAQ&url=https%3A%2F%2Fsmallpdf.com%2Fblog%2Fsample-pdf&usg=AOvVaw0oylE_NB9vwX4WHZdsKGmy"

  constructor() {

  }
  ngOnInit() {
    $(document).ready(() => {
      console.log("Jquery is working")
      //menu clicking
      $('.linkData').click(function () {
        $(".linkData").removeClass("active")
        $(this).addClass('active')
        console.log($(this))
        debugger
        $(".linkData").attr("aria-selected", "false")
        $(this).attr("aria-selected", "true")

      })
    }
    )
  }

  changeData(val1) {
    this.primary = false;
    this.secondary = false;
    this.success = false;
    this.danger = false;
    this.form = false;
    this.News = false;
    this.pdf = false;
    this.bind = false
    this.uploadphoto = false

    if (val1 == "Primary") {
      this.primary = true;
    }
    if (val1 == "Secondary") {
      this.secondary = true;
    }
    if (val1 == "Success") {
      this.success = true;
    }
    if (val1 == "Danger") {
      this.danger = true;
    }
    if (val1 == "Form") {
      this.form = true;
    }
    if (val1 == "pdf") {
      this.pdf = true;
    }
    if (val1 == "News") {
      this.News = true;
    }
    if(val1 == "Bind"){
      this.bind = true;
    }
    if(val1 == "UploadPhoto"){
      this.uploadphoto = true;
    }
  }

}

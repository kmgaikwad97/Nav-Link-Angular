import { Component } from '@angular/core';
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
  }

}

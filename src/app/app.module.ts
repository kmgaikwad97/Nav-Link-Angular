import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from "@angular/common/http"
import { NewsapiserviceService } from "./service/newsapiservice.service";
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component';
import { BindDropdownComponent } from './bind-dropdown/bind-dropdown.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component'

// for HttpClient import:
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';



@NgModule({
  declarations: [
    AppComponent,
    NewsapiComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessComponent,
    BindDropdownComponent,
    UploadPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=560ccb8dd223407d8fb4188855525887"

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=560ccb8dd223407d8fb4188855525887"

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=560ccb8dd223407d8fb4188855525887"


  // top heading

  topHeading():Observable<any>
  {
    return this.http.get(this.newsApiUrl)
  }


  // techNews

  techNews():Observable<any>
  {
    return this.http.get(this.techApiUrl);
  }


  // businessNews
  
  businessNews():Observable<any>
  {
    return this.http.get(this.businessApiUrl);
  }


}

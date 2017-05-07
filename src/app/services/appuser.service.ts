import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import "rxjs/add/operator/map";


@Injectable()
export class AppuserService {

  constructor(private http:Http) {
   }

   getUser(user){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      console.log(user);
      return this.http.post('http://localhost:3000/user',user,{headers:headers}).map(res=>res.json());
      

   }


  getNewsFeed(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/user/home',{headers:headers}).map(res=>res.json());

  }

   putNewsfeeds(story){
     console.log(story);
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/user/home',story,{headers:headers}).map(res=>res.json());
      

   }
}

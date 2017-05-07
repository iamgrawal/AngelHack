import { Component, OnInit } from '@angular/core';
import {AppuserService} from '../../../services/appuser.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent implements OnInit {
 

 data:any;
 click:any;
  constructor(private appuserService:AppuserService) { 
      this.appuserService.getNewsFeed().subscribe(result=>{
        this.data = result.data;
     })


}
  

  ngOnInit() {

  }

  thumbsup(i){
    this.data[i].vote +=1;
    this.click +=1;
    
  }
  thumbsdown(i){

    this.data[i].vote -=1;
    this.click +=1;
}

}


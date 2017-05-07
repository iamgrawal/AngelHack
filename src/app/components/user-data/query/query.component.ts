import { Component, OnInit } from '@angular/core';
import {AppuserService} from '../../../services/appuser.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(private appuserService:AppuserService) { }

  ngOnInit() {
  }

  title:any;
  description:any;
  imageUrl:any;
  location:any;
  vote:any;
  resolve:any
  onSubmit(){
const query = {

        title:this.title,
        description:this.description,
        imageUrl:this.imageUrl,
        location:this.location,
        vote:this.vote,
        resolve:this.resolve
    }
console.log('Hi');
    this.appuserService.putNewsfeeds(query).subscribe(data=>{
      if(data.success){
        console.log("success");
      }
      else{
        console.log("failure");
      }
    });




  }

}

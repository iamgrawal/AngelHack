import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import{ActivatedRoute,Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { AppuserService} from '../../services/appuser.service';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent  {

  firstname:String;
  lastname:String;
  address:String;
  pincode:Number;
  adharId:String;

  constructor(
    private appuserService:AppuserService){
    
  }

  onSubmit(){
    const user = {

        firstname:this.firstname,
        lastname:this.lastname,
        address:this.address,
        pincode:this.pincode,
        adharId:this.adharId

    }
    this.appuserService.getUser(user).subscribe(data=>{
      if(data.success){
        console.log("success");
      }
      else{
        console.log("failure");
      }
    });
    
  }
  
}

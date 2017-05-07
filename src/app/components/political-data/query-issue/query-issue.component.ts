import { Component, OnInit } from '@angular/core';
import {AppuserService} from '../../../services/appuser.service';

@Component({
  selector: 'app-query-issue',
  templateUrl: './query-issue.component.html',
  styleUrls: ['./query-issue.component.css']
})
export class QueryIssueComponent implements OnInit {
  data:any;
  constructor(private appuserService:AppuserService) { 

    this.appuserService.getNewsFeed().subscribe(result=>{
      this.data = result.data;

    });
  }

  ngOnInit() {
  }


}

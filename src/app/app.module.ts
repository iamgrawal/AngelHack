import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { PoliticalDataComponent } from './components/political-data/political-data.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import {routing} from './app.routing';

//Services

import {AppuserService} from './services/appuser.service';
import { UserHomeComponent } from './components/user-data/user-home/user-home.component';
import { QueryComponent } from './components/user-data/query/query.component';
import { QueryBaseComponent } from './components/user-data/query-base/query-base.component';
import { QueryIssueComponent } from './components/user-data/query-issue/query-issue.component';
import { QueryResolvedComponent } from './components/user-data/query-resolved/query-resolved.component';
import { QueryTrendingComponent } from './components/user-data/query-trending/query-trending.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    PoliticalDataComponent,
    BasePageComponent,
    UserHomeComponent,
    QueryComponent,
    QueryBaseComponent,
    QueryIssueComponent,
    QueryResolvedComponent,
    QueryTrendingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AppuserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

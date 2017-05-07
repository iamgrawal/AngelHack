import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import {PoliticalDataComponent} from './components/political-data/political-data.component';
import {BasePageComponent} from './components/base-page/base-page.component';
import {UserDataComponent} from './components/user-data/user-data.component';
import {UserHomeComponent} from './components/user-data/user-home/user-home.component';
import {QueryComponent} from './components/user-data/query/query.component';
import {QueryBaseComponent} from './components/user-data/query-base/query-base.component';
import {QueryIssueComponent} from './components/user-data/query-issue/query-issue.component';
import {QueryResolvedComponent} from './components/user-data/query-resolved/query-resolved.component';
import {QueryTrendingComponent} from './components/user-data/query-trending/query-trending.component';

const appRoutes:Routes = [
    {
        path:'',
        component:BasePageComponent
    },{
        path:'politician',
        component:PoliticalDataComponent
        
    },
    {
        path:'user',
        component:UserDataComponent
   
    },{
        path:'home',
        component:UserHomeComponent
    },{
        path:'issue',
        component:QueryComponent
    },{
         path:'unsolved',
        component:QueryIssueComponent
    },{
         path:'resolved',
        component:QueryResolvedComponent
    },{
         path:'trending',
        component:QueryTrendingComponent
    }
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLoginComponent} from './client/guess/client-login/client-login.component';
import { ClientIndexComponent } from './client/guess/client-index/client-index.component';
import { ClientAdminDashboardComponent } from '../../src/app/client/client-admin-dashboard/client-admin-dashboard.component'
import { ClientAdminPart01Component } from '../app/client/dashboard-create-website/client-admin-part01/client-admin-part01.component';
import { ClientAdminPart02Component} from '../app/client/dashboard-create-website/client-admin-part02/client-admin-part02.component';
import { ClientAdminDashboardIndexComponent } from '../app/client/dashboard-dashboard/client-admin-dashboard-index/client-admin-dashboard-index.component';
import { DashboardCreateWebsiteIndexComponent } from '../app/client/dashboard-create-website/dashboard-create-website-index/dashboard-create-website-index.component';
import { StatisticComponent } from './client/statistic/statistic.component';
import { ClientRegisterComponent } from './client/guess/client-register/client-register.component';
import { UserInformationComponent } from './client/user-information/user-information.component';
const routes: Routes = [
  { path: '', component: ClientIndexComponent },
  { path: 'login', component: ClientLoginComponent },
  { path: 'register-account', component: ClientRegisterComponent },
  { path: 'client/admin', component:ClientAdminDashboardComponent,
    children:[
    {path:'index',component:ClientAdminDashboardIndexComponent},
    {path:'part-01',component:ClientAdminPart01Component},
    {path:'part-02',component:ClientAdminPart02Component},
    {path:'website/create',component:DashboardCreateWebsiteIndexComponent},
    {path:'website/statistic/:id', component: StatisticComponent },
    { path: 'website/user/:id', component: UserInformationComponent },
    { path: '**', component: ClientAdminDashboardIndexComponent }]
  },
  {path:'**',component:ClientIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

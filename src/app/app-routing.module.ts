import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLoginComponent} from './client/guess/client-login/client-login.component';
import { ClientIndexComponent } from './client/guess/client-index/client-index.component';
import { ClientAdminDashboardComponent } from '../../src/app/client/client-admin-dashboard/client-admin-dashboard.component'
import { ClientAdminPart01Component } from '../app/client/dashboard-create-website/client-admin-part01/client-admin-part01.component';
import { ClientAdminPart02Component} from '../app/client/dashboard-create-website/client-admin-part02/client-admin-part02.component';
import { ClientAdminDashboardIndexComponent } from '../app/client/dashboard-dashboard/client-admin-dashboard-index/client-admin-dashboard-index.component';
import { DashboardCreateWebsiteIndexComponent } from '../app/client/dashboard-create-website/dashboard-create-website-index/dashboard-create-website-index.component';
import { ClientCMSGeneratedComponent } from '../app/client/client-preview-cms/client-cms-generated/client-cms-generated.component';
import {ClientCMSGenerateCreateUIComponent} from '../app/client/client-preview-cms/client-cms-generate-create-ui/client-cms-generate-create-ui.component'
import {ClientCMSGenerateUpdateUIComponent} from '../app/client/client-preview-cms/client-cms-generate-update-ui/client-cms-generate-update-ui.component';
import {ClientCMSGenerateDeleteUIComponent} from '../app/client/client-preview-cms/client-cms-generate-delete-ui/client-cms-generate-delete-ui.component';
import {ClientCMSGenerateReadUIComponent} from '../app/client/client-preview-cms/client-cms-generate-read-ui/client-cms-generate-read-ui.component';

const routes: Routes = [
  { path: '', component: ClientIndexComponent },
  { path: 'login', component: ClientLoginComponent },
  { path: 'client/admin', component:ClientAdminDashboardComponent,
    children:[
    {path:'index',component:ClientAdminDashboardIndexComponent},
    {path:'part-01',component:ClientAdminPart01Component},
    {path:'part-02',component:ClientAdminPart02Component},
    {path:'website/create',component:DashboardCreateWebsiteIndexComponent},
    {path:'**',component:ClientAdminDashboardIndexComponent}]

},
  {path:'website/generated/index',component:ClientCMSGeneratedComponent,
children:[
  {path:'entity/create',component:ClientCMSGenerateCreateUIComponent},
  {path:'entity/read',component:ClientCMSGenerateReadUIComponent},
  {path:'entity/update',component:ClientCMSGenerateUpdateUIComponent},
  {path:'entity/delete',component:ClientCMSGenerateDeleteUIComponent},

  
]},
  {path:'**',component:ClientIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLoginComponent} from '../../src/app/client/client-login/client-login.component';
import { ClientIndexComponent } from '../../src/app/client/client-index/client-index.component';
import { ClientAdminComponent} from '../../src/app/client/client-admin/client-admin.component';
import {ClientAdminDashboardComponent} from '../../src/app/client/client-admin-dashboard/client-admin-dashboard.component'
import {ClientPreviewWebsiteComponent} from '../../src/app/client/client-preview-website/client-preview-website.component'
import {ClientAdminPart01Component} from '../../src/app/client/client-admin-part01/client-admin-part01.component'
import {ClientAdminPart02Component} from '../../src/app/client/client-admin-part02/client-admin-part02.component'

const routes: Routes = [
  { path: '', component: ClientIndexComponent },
  { path: 'login', component: ClientLoginComponent },
  { path: 'client/admin', component:ClientAdminDashboardComponent,
    children:[
    {path:'preview',component:ClientPreviewWebsiteComponent},
    {path:'part-01',component:ClientAdminPart01Component},
    {path:'part-02',component:ClientAdminPart02Component}]
},
  {path:'**',component:ClientIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

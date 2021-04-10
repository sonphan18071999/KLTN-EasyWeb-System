import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLoginComponent} from '../../src/app/client/client-login/client-login.component';
import { ClientIndexComponent } from '../../src/app/client/client-index/client-index.component';
import { ClientAdminComponent} from '../../src/app/client/client-admin/client-admin.component';
const routes: Routes = [
  { path: '', component: ClientIndexComponent },
  { path: 'login', component: ClientLoginComponent },
  { path: 'client/admin', component:ClientAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

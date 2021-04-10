import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule} from './material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientHomepageComponent } from './client/client-homepage/client-homepage.component';
import { ClientHeaderComponent } from './client/client-header/client-header.component';
import { ClientFooterComponent } from './client/client-footer/client-footer.component';
import { ClientLoginComponent } from './client/client-login/client-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientIndexComponent } from './client/client-index/client-index.component';
import { ClientAdminComponent } from './client/client-admin/client-admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard.component';
import { ClientAdminPart01Component } from './client/client-admin-part01/client-admin-part01.component';
import { ClientAdminPart02Component } from './client/client-admin-part02/client-admin-part02.component';
import { ClientAdminPart03Component } from './client/client-admin-part03/client-admin-part03.component';
import { ClientAdminPart04Component } from './client/client-admin-part04/client-admin-part04.component';
import { ClientPreviewWebsiteComponent } from './client/client-preview-website/client-preview-website.component';
import { ClientProgressBarPartsComponent } from './client/client-progress-bar-parts/client-progress-bar-parts.component';
import { ClientHeaderAfterLoginComponent } from './client/client-header-after-login/client-header-after-login.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientHomepageComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    ClientLoginComponent,
    ClientIndexComponent,
    ClientAdminComponent,
    ClientDashboardComponent,
    ClientAdminPart01Component,
    ClientAdminPart02Component,
    ClientAdminPart03Component,
    ClientAdminPart04Component,
    ClientPreviewWebsiteComponent,
    ClientProgressBarPartsComponent,
    ClientHeaderAfterLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

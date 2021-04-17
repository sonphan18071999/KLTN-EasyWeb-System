import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule} from './material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientHomepageComponent } from './client/guess/client-homepage/client-homepage.component';
import { ClientHeaderComponent } from './client/guess/client-header/client-header.component';
import { ClientFooterComponent } from './client/guess/client-footer/client-footer.component';
import { ClientLoginComponent } from './client/guess/client-login/client-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientIndexComponent } from './client/guess/client-index/client-index.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClientAdminPart01Component } from './client/dashboard-create-website/client-admin-part01/client-admin-part01.component';
import { ClientAdminPart02Component } from './client/dashboard-create-website/client-admin-part02/client-admin-part02.component';
import { ClientAdminPart03Component } from './client/dashboard-create-website/client-admin-part03/client-admin-part03.component';
import { ClientAdminPart04Component } from './client/dashboard-create-website/client-admin-part04/client-admin-part04.component';
import { ClientPreviewWebsiteComponent } from './client/dashboard-create-website/client-preview-website/client-preview-website.component';
import { ClientHeaderAfterLoginComponent } from './client/client-header-after-login/client-header-after-login.component';
import { ClientAdminDashboardComponent } from './client/client-admin-dashboard/client-admin-dashboard.component';
import { ClientAdminDashboardHeaderComponent } from './client/client-admin-dashboard-header/client-admin-dashboard-header.component';
import { ClientAdminDashboardNavigationComponent } from './client/client-admin-dashboard-navigation/client-admin-dashboard-navigation.component';
import { ClientAdminDashboardIndexComponent } from './client/dashboard-dashboard/client-admin-dashboard-index/client-admin-dashboard-index.component';
import { ClientAdminDashboardIndexSquaresComponent } from './client/dashboard-dashboard/client-admin-dashboard-index-squares/client-admin-dashboard-index-squares.component';
import { ChartsModule } from 'ng2-charts';
import { ClientAdminDashboardIndexChartVerticalComponent } from './client/dashboard-dashboard/client-admin-dashboard-index-chart-vertical/client-admin-dashboard-index-chart-vertical.component';
import { ClientAdminDashboardIndexDoughnutChartComponent } from './client/dashboard-dashboard/client-admin-dashboard-index-doughnut-chart/client-admin-dashboard-index-doughnut-chart.component';
import { DashboardCreateWebsiteIndexComponent } from './client/dashboard-create-website/dashboard-create-website-index/dashboard-create-website-index.component';
import { ProgressBarComponent } from './client/dashboard-create-website/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientHomepageComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    ClientLoginComponent,
    ClientIndexComponent,
    ClientAdminPart01Component,
    ClientAdminPart02Component,
    ClientAdminPart03Component,
    ClientAdminPart04Component,
    ClientPreviewWebsiteComponent,
    ClientHeaderAfterLoginComponent,
    ClientAdminDashboardComponent,
    ClientAdminDashboardHeaderComponent,
    ClientAdminDashboardNavigationComponent,
    ClientAdminDashboardIndexComponent,
    ClientAdminDashboardIndexSquaresComponent,
    ClientAdminDashboardIndexChartVerticalComponent,
    ClientAdminDashboardIndexDoughnutChartComponent,
    DashboardCreateWebsiteIndexComponent,
    ProgressBarComponent,
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
    MatListModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

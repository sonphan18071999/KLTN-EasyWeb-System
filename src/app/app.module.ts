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
import { ClientAdminPart02PopupComponent } from './client/dashboard-create-website/client-admin-part02-popup/client-admin-part02-popup.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ClientCMSGeneratedComponent } from './client/client-preview-cms/client-cms-generated/client-cms-generated.component';
import { ClientCMSGenerateTableComponent } from './client/client-preview-cms/client-cms-generate-table/client-cms-generate-table.component';
import { ClientCMSGenerateCreateUIComponent } from './client/client-preview-cms/client-cms-generate-create-ui/client-cms-generate-create-ui.component';
import { ClientCMSGenerateUpdateUIComponent } from './client/client-preview-cms/client-cms-generate-update-ui/client-cms-generate-update-ui.component';
import { ClientCMSGenerateDeleteUIComponent } from './client/client-preview-cms/client-cms-generate-delete-ui/client-cms-generate-delete-ui.component';
import { ClientCMSGenerateReadUIComponent } from './client/client-preview-cms/client-cms-generate-read-ui/client-cms-generate-read-ui.component';
import { ClientCmsGeneratedNavigationComponent } from './client/client-preview-cms/client-cms-generated-navigation/client-cms-generated-navigation.component';
import { DialogEditTableItemComponent } from './client/dashboard-create-website/dialog-edit-table-item/dialog-edit-table-item.component';
import { DialogEditColumnItemComponent } from './client/dashboard-create-website/dialog-edit-column-item/dialog-edit-column-item.component';
import { ClientCMSHomepageSearchComponent } from './client/client-preview-cms/client-cmshomepage-search/client-cmshomepage-search.component';
import { StatisticComponent } from './client/statistic/statistic.component';

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
    ClientAdminPart02PopupComponent,
    ClientCMSGeneratedComponent,
    ClientCMSGenerateTableComponent,
    ClientCMSGenerateCreateUIComponent,
    ClientCMSGenerateUpdateUIComponent,
    ClientCMSGenerateDeleteUIComponent,
    ClientCMSGenerateReadUIComponent,
    ClientCmsGeneratedNavigationComponent,
    DialogEditTableItemComponent,
    DialogEditColumnItemComponent,
    ClientCMSHomepageSearchComponent,
    StatisticComponent,
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
    ChartsModule,
    MatGridListModule ,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

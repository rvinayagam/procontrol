import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import 'hammerjs'
import { AdminModule } from './admin/admin.module'
import { AlertsModule } from './alerts/alerts.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthHttpInterceptor } from './auth/auth-http-interceptor'
import { AuthService } from './auth/auth.service'
import { SimpleDialogComponent, UiService } from './common/ui.service'
import { DashboardModule } from './dashboard/dashboard.module'
import { EquipmentControlModule } from './equipment-control/equipment-control.module'
import { EquipmentNearByModule } from './equipment-near-by/equipment-near-by.module'
import { GeofenceModule } from './geofence/geofence.module'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { MapMyEquipmentModule } from './map-my-equipment/map-my-equipment.module'
import { MaterialModule } from './material.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ReportsModule } from './reports/reports.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SimpleDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AdminModule,
    AppRoutingModule,
    MapMyEquipmentModule,
    EquipmentNearByModule,
    GeofenceModule,
    DashboardModule,
    ReportsModule,
    AlertsModule,
    EquipmentControlModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    UiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

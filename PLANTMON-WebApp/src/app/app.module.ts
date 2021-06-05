import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NoPlantsAvailableComponent } from './components/commons/no-plants-available/no-plants-available.component';
import { NotificationComponent } from './components/commons/notification/notification.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { InformationComponent } from './components/information/information.component';
import { PlantInfoListComponent } from './components/information/plant-info-list/plant-info-list.component';
import { PlantInfoDetailsComponent } from './components/information/plant-info-details/plant-info-details.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MPlantDetailComponent } from './components/inventory/m-plant-detail/m-plant-detail.component';
import { MAddPlantComponent } from './components/inventory/m-add-plant/m-add-plant.component';
import { MPlantPreviewComponent } from './components/inventory/m-plant-preview/m-plant-preview.component';
import { MPlantEditComponent } from './components/inventory/m-plant-edit/m-plant-edit.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { SAddPlantComponent } from './components/monitoring/s-add-plant/s-add-plant.component';
import { SPlantDetailComponent } from './components/monitoring/s-plant-detail/s-plant-detail.component';
import { SPlantEditComponent } from './components/monitoring/s-plant-edit/s-plant-edit.component';
import { SPlantPreviewComponent } from './components/monitoring/s-plant-preview/s-plant-preview.component';
import { InitPageComponent } from './components/init-page/init-page.component';
import { NoReminderAvailableComponent } from './components/reminders/no-reminder-available/no-reminder-available.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NoPlantsAvailableComponent,
    NotificationComponent,
    RemindersComponent,
    LoginComponent,
    SignUpComponent,
    InformationComponent,
    PlantInfoListComponent,
    PlantInfoDetailsComponent,
    InventoryComponent,
    MPlantDetailComponent,
    MAddPlantComponent,
    MPlantPreviewComponent,
    MPlantEditComponent,
    MonitoringComponent,
    SAddPlantComponent,
    SPlantDetailComponent,
    SPlantEditComponent,
    SPlantPreviewComponent,
    InitPageComponent,
    NoReminderAvailableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

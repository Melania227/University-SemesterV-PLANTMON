import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';

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
import { MPlantEditComponent } from './components/inventory/m-plant-edit/m-plant-edit.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { SAddPlantComponent } from './components/monitoring/s-add-plant/s-add-plant.component';
import { SPlantDetailComponent } from './components/monitoring/s-plant-detail/s-plant-detail.component';
import { SPlantEditComponent } from './components/monitoring/s-plant-edit/s-plant-edit.component';
import { InitPageComponent } from './components/init-page/init-page.component';
import { NoReminderAvailableComponent } from './components/reminders/no-reminder-available/no-reminder-available.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateReminderComponent } from './components/reminders/create-reminder/create-reminder.component';

import { ReminderService } from "./services/reminder.service";
import { HttpClientModule } from '@angular/common/http';
import { MPlantListComponent } from './components/inventory/m-plant-list/m-plant-list.component';
import { SPlantListComponent } from './components/monitoring/s-plant-list/s-plant-list.component';
import { RemindersListComponent } from './components/reminders/reminders-list/reminders-list.component';
import { CarouselComponent } from './components/commons/carousel/carousel.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { GuardGuard } from './components/commons/guard.guard';

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
    MPlantEditComponent,
    MonitoringComponent,
    SAddPlantComponent,
    SPlantDetailComponent,
    SPlantEditComponent,
    InitPageComponent,
    NoReminderAvailableComponent,
    CreateReminderComponent,
    MPlantListComponent,
    SPlantListComponent,
    RemindersListComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar: true
    }),
    BrowserAnimationsModule
  ],
  providers: [
    ReminderService,
    GuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

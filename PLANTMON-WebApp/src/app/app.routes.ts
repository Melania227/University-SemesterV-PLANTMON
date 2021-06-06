import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { InformationComponent } from "./components/information/information.component";
import { PlantInfoDetailsComponent } from "./components/information/plant-info-details/plant-info-details.component";
import { InitPageComponent } from "./components/init-page/init-page.component";
import { InventoryComponent } from "./components/inventory/inventory.component";
import { MAddPlantComponent } from "./components/inventory/m-add-plant/m-add-plant.component";
import { MonitoringComponent } from "./components/monitoring/monitoring.component";
import { SAddPlantComponent } from "./components/monitoring/s-add-plant/s-add-plant.component";
import { CreateReminderComponent } from "./components/reminders/create-reminder/create-reminder.component";
import { RemindersComponent } from "./components/reminders/reminders.component";

const APP_ROUTES : Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'monitoring', component: MonitoringComponent},
    {path: 'info', component: InformationComponent},
    {path: 'info/:id', component: PlantInfoDetailsComponent},
    {path: 'reminders', component: RemindersComponent},
    {path: 'init', component: InitPageComponent},
    {path: 'addInventoryPlant', component: MAddPlantComponent},
    {path: 'addMonitoringPlant', component: SAddPlantComponent},
    {path: 'addReminder', component: CreateReminderComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'addReminder'} /* PREDETERMINADA */
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
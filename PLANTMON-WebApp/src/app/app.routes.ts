import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { InformationComponent } from "./components/information/information.component";
import { InitPageComponent } from "./components/init-page/init-page.component";
import { InventoryComponent } from "./components/inventory/inventory.component";
import { MonitoringComponent } from "./components/monitoring/monitoring.component";
import { RemindersComponent } from "./components/reminders/reminders.component";

const APP_ROUTES : Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'monitoring', component: MonitoringComponent},
    {path: 'info', component: InformationComponent},
    {path: 'records', component: RemindersComponent},
    {path: 'init', component: InitPageComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'init'} /* PREDETERMINADA */
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
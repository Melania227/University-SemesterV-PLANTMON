import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { InformationComponent } from "./components/information/information.component";
import { PlantInfoDetailsComponent } from "./components/information/plant-info-details/plant-info-details.component";
import { PlantInfoListComponent } from "./components/information/plant-info-list/plant-info-list.component";
import { InitPageComponent } from "./components/init-page/init-page.component";
import { InventoryComponent } from "./components/inventory/inventory.component";
import { MAddPlantComponent } from "./components/inventory/m-add-plant/m-add-plant.component";
import { MPlantDetailComponent } from "./components/inventory/m-plant-detail/m-plant-detail.component";
import { MPlantEditComponent } from "./components/inventory/m-plant-edit/m-plant-edit.component";
import { MPlantListComponent } from "./components/inventory/m-plant-list/m-plant-list.component";
import { LoginComponent } from "./components/login/login.component";
import { MonitoringComponent } from "./components/monitoring/monitoring.component";
import { SAddPlantComponent } from "./components/monitoring/s-add-plant/s-add-plant.component";
import { SPlantDetailComponent } from "./components/monitoring/s-plant-detail/s-plant-detail.component";
import { SPlantEditComponent } from "./components/monitoring/s-plant-edit/s-plant-edit.component";
import { SPlantListComponent } from "./components/monitoring/s-plant-list/s-plant-list.component";
import { CreateReminderComponent } from "./components/reminders/create-reminder/create-reminder.component";
import { RemindersListComponent } from "./components/reminders/reminders-list/reminders-list.component";
import { RemindersComponent } from "./components/reminders/reminders.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

const APP_ROUTES : Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'inventory',
        component: InventoryComponent,
        children:[
            {path: "", redirectTo: "list", pathMatch: "full"},
            {path: 'list', component: MPlantListComponent},
            {path: 'add', component: MAddPlantComponent},
            {path: 'edit/:id', component: MPlantEditComponent},
            {path: 'detail/:id', component: MPlantDetailComponent}
        ]
    },
    {path: 'monitoring',
        component: MonitoringComponent,
        children:[
            {path: "", redirectTo: "list", pathMatch: "full"},
            {path: 'list', component: SPlantListComponent},
            {path: 'add', component: SAddPlantComponent},
            {path: 'edit/:id', component: SPlantEditComponent},
            {path: 'detail/:id', component: SPlantDetailComponent}
        ]
    },
    {path: 'reminders',
        component: RemindersComponent,
        children:[
            {path: "", redirectTo: "list", pathMatch: "full"},
            {path: 'list', component: RemindersListComponent},
            {path: 'add', component: CreateReminderComponent}
        ]
    },
    {path: 'info',
        component: InformationComponent,
        children:[
            {path: "", redirectTo: "list", pathMatch: "full"},
            {path: 'list', component: PlantInfoListComponent},
            {path: 'details/:id', component: PlantInfoDetailsComponent}
        ]
    },

    {path: 'init', component: InitPageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignUpComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'init'} /* PREDETERMINADA */
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { PagesComponent } from "./pages/pages.component";
import { AuthGuard } from "./guards/auth.guard";
import { Roles } from "./utils/enums/roles.enum";

export const routes: Routes = [

    {
        path: '',
        component: AuthComponent,
        children: [
    {
        path: 'login',
        loadChildren: () => import('./auth/login-page/login.module').then(m=> m.LoginModule)
    },
    {
        path: 'registration',
        loadChildren: () => import('./auth/registration-page/registration.module').then(m=> m.RegistrationModule)
    },
        ]
    },
    {
        path: '',
        component: PagesComponent,
        children:[
    {
        path: 'home',
        loadChildren: () => import('./pages/home-page/home.module').then(m=> m.HomeModule),
        canActivate: [AuthGuard],
        data:{
            canAccess: [Roles.ADMIN, Roles.USER]
        }
    }
]
},
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}
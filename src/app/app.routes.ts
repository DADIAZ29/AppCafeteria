import { Routes } from '@angular/router';
import { Catalogo } from './pages/catalogo/catalogo';
import { adminGuard } from './guards/admin.guard';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { AdminPanel } from './pages/admin-panel/admin-panel';


export const routes: Routes = [
    { path: '', redirectTo: 'catalogo', pathMatch: 'full' },

    { path: 'catalogo', component: Catalogo },

    {
        path: 'admin-panel',
        component: AdminPanel,
        canActivate: [adminGuard]
    },

    { path: 'login', component: Login },

    { path: '**', component: NotFound }


];

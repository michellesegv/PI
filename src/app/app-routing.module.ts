import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'
import { LoginComponent } from './login/login.component'
import { FullComponent } from './layouts/full/full.component';

import { LoginPruebaModule } from './login-prueba/login.module'
import { RegisterPruebaComponent } from './register-prueba/register.component'
export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '', redirectTo: 'inicio'
        , pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
      },
      { path: 'login-prueba', loadChildren: () => import('./login-prueba/login.module').then(m => m.LoginPruebaModule) },
    ]
  },
  { path: 'register-prueba', component: RegisterPruebaComponent },
  {
    path: '**',
    redirectTo: ''
  }
];

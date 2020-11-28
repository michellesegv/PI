import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginPruebaComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Login',
      urls: [
        { title: 'Login', url: '/login-prueba' },
        { title: 'Login' }
      ]
    },
    component: LoginPruebaComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  declarations: [LoginPruebaComponent]
})
export class LoginPruebaModule {

}

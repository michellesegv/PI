import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sign Up',
      urls: [
        { title: 'Sign Up', url: '/sign-up' },
        { title: 'Sign Up' }
      ]
    },
    component: SignUpComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), HttpClientModule],
  declarations: [SignUpComponent]
})

export class SignUpModule {

}

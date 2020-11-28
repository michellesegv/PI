import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Inicio',
      urls: [
        { title: 'Inicio', url: '/inicio' },
        { title: 'Inicio' }
      ]
    },
    component: InicioComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [InicioComponent]
})
export class InicioModule {

}

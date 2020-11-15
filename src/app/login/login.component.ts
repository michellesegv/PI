import { Component, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import router from angular router
// import { Routes, RouterModule } from '@angular/router';
// import { Location } from '@angular/common';
//declare var require: any;

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent implements AfterViewInit {
  // private location: Location
  constructor(public httpClient: HttpClient) {

  }

  ngAfterViewInit() { }

  sendGetRequest() {
    const dataUsuario = {
      "nombres": "Michelle",
      "apellidoMaterno": "Vilchez",
      "apellidoPaterno": "Seguil",
      "direccion": "mi casita roja",
      "fechaNacimiento": "1998/11/25",
      "tipoDocumentoId": "2",
      "numeroDocumento": "987654321",
      "distritoId": "12",
      "generoId": "1",
      "estadoId": "1",
      "userName": "michelleprueba123",
      "password": "123456SM"
    }

    console.log(dataUsuario);
    const headers = { 'Content-Type': 'application/json' };
    this.httpClient.post<any>('http://localhost:8080/Proyecto_Wallet/tipopost/registerClient', dataUsuario, { 'headers': headers }).subscribe((res) => {
      console.log("POST Registro is ok", res);
      setTimeout(() => {
        // this.router.navigate(['items'], { relativeTo: this.route });
        // this.router.navigate(['/role']);
        // this.location.back();
        alert('Bienvenido!')
      }, 3000)
    });
  }
}

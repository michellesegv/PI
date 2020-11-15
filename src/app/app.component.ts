import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public titulo: string;
  title = 'app';

  constructor() {
    this.titulo = "wiwi"
    console.log(this.titulo, 'titlo')
  }
}

// ng g component component/wiwi

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  name = 'Juan Manuel';
  correo = 'juuanmaarmero30@gmail.com';
  num1 = 5;
  num2 = 5;
  urlImagen = 'https://www.w3schools.com/w3images/fjords.jpg';
  nombreCampo: any;
  nombrePlaceholder: any;
  email: any;

  Saludo() {
    alert('Buenas tardes');
  }

  Suma() {
    alert(this.num1 + this.num2);
  }

  recibirValor(event: Event) {
    console.log(event);
  }
}





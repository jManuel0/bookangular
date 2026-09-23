import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-labs',
  styleUrl: './labs.scss',
  templateUrl: './labs.html',
})
export class Labs {

  name = 'Juan Ordoñez';
  num1 = 5;
  num2 = 5;
  urlImagen = 'https://placehold.co/800x150';

  nombreCampo = 'País';
  nombrePlaceholder = 'Escriba el país de nacimiento'

  saludo() {
    alert('Buenas tardes');
  }

  suma() {
    alert(this.num1 + this.num2);
  }

  recibirValor(event: Event) {
    console.log(event)
  }
}


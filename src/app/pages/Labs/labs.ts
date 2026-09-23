import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.html',
  styleUrl: './labs.scss',
})
export class Labs {


  name = 'Diery Valencia';
  edad = signal(25);
  email = 'diery.valencia@gmail.com';
  imagenr = 'https://placehold.co/400';
  nombreCampo ='Ciudad';
  nombrePlaceholder = 'escribe tu ciudad';

  person = {
    name: "Diery Valencia",
    age: 25,
    email: "dieryvale@gmail.com"
  };

colores = [{
  name:"Rojo",
  color:"red",
},
{
  name:"Verde",
  color:"green"
},
{
  name:"azul",
  color:"blue"
}
]

mascota = signal("Perrito");

 users = [
    {
      name: 'Juan Perez',
      email: 'juan.perez@correo.com',
      position: 'Administrador',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Maria Gomez',
      email: 'maria.gomez@correo.com',
      position: 'Desarrollador Frontend',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Carlos Ruiz',
      email: 'carlos.ruiz@correo.com',
      position: 'Desarrollador Backend',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Ana Torres',
      email: 'ana.torres@correo.com',
      position: 'Diseñador UI/UX',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Luis Martinez',
      email: 'luis.martinez@correo.com',
      position: 'Analista de Datos',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Sofia Ramirez',
      email: 'sofia.ramirez@correo.com',
      position: 'Gerente de Proyectos',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Jorge Herrera',
      email: 'jorge.herrera@correo.com',
      position: 'Especialista en Marketing',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Lucia Castro',
      email: 'lucia.castro@correo.com',
      position: 'Soporte Técnico',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Miguel Vargas',
      email: 'miguel.vargas@correo.com',
      position: 'Control de Calidad (QA)',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Elena Morales',
      email: 'elena.morales@correo.com',
      position: 'Recursos Humanos',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'David Silva',
      email: 'david.silva@correo.com',
      position: 'DevOps Engineer',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
  ];

  saludo() {
    alert('Buenas tardes');
  }

  onChangeRecibirValor(event: Event){
    const input = event.target as HTMLInputElement;
    const value = input.value;
    console.log(value);

  }

  onInputRecibirValor(event: Event){
    console.log((event.target as HTMLInputElement).value);

    if((event.target as HTMLInputElement).value === 'string'){
      alert('No esta permitido la palabra string');
    }
  }


}

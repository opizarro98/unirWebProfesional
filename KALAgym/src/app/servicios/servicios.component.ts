import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  servicios = [
    // Asegúrate de tener datos aquí
    { title: 'Servicio 1', description: 'Espacio totalmente equipado con instalaciones y entrenadores profesionales calificados.', image: "../../assets/image/pesa.gif" },
    { title: 'Servicio 2', description: 'Descripción del servicio 2', image: "../../assets/image/balance.gif" },
    { title: 'Servicio 4', description: 'Descripción del servicio 2', image: "../../assets/image/doctor.gif" },
    { title: 'Servicio 4', description: 'Descripción del servicio 2', image: "../../assets/image/fuerte.gif" },
    // ...
  ];
}

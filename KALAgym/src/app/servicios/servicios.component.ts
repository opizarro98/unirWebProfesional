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
    { title: 'KALAGYM', description: 'Espacio totalmente equipado con instalaciones y entrenadores profesionales calificados.', image: "../../assets/image/pesa.gif" },
    { title: 'KALATRACK', description: 'Tratamiento terapéutico osteopático para pacientes con molestias del día a día.', image: "../../assets/image/balance.gif" },
    { title: 'KALAPROS', description: 'Grupo de especialistas externos y  calificados, para garantizar una atención esoecializada y completa.', image: "../../assets/image/doctor.gif" },
    { title: 'TRAINING', description: 'Entrenamiento especializado para pacientes geriátricospropioceptivo.', image: "../../assets/image/fuerte.gif" },
    // ...
  ];
}

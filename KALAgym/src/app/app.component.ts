import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarrucelComponent } from './carrucel/carrucel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CarrucelComponent, ServiciosComponent, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KALAgym';

   txtmenu1: string = 'Inicio';
   txtmenu2: string = 'Servicios';
   txtmenu3: string = 'Productos';
   txtmenu4: string = 'Contacto';
}



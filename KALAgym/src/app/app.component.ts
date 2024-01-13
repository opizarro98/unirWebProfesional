import { Component, HostListener } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarrucelComponent } from './carrucel/carrucel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FooterComponent } from './footer/footer.component';
import {  Routes } from '@angular/router';

const routes: Routes = [
  { path: 'carrucel', component: CarrucelComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'Inicio', redirectTo: '/carrucel', pathMatch: 'full' },
];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CarrucelComponent, ServiciosComponent, ContactoComponent, NosotrosComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  isNavbarStatic = true;
  isNavbarFixed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarFixed = offset > 180;
    this.isNavbarStatic = offset < 50;
  }

  title = 'KALAgym';

   txtmenu1: string = 'Inicio';
   txtmenu2: string = 'Nosotros';
   txtmenu3: string = 'Servicios';
   txtmenu4: string = 'Contacto';
}



import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { DetalleProducto } from './components/detalle-producto/detalle-producto';
import { ContactoComponent } from './components/contacto/contacto';

// Acá defino mis rutas, bien simple.
export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio - Tienda de Mates' },
  { path: 'producto/:id',  loadComponent: () => import('./components/detalle-producto/detalle-producto').then(m => m.DetalleProducto) },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto' },
  { path: 'home', redirectTo: '', pathMatch: 'full' }, // Si ponen /home, los mando al inicio
  
  { path: '**', redirectTo: '', pathMatch: 'full' } // Si ponen cualquier cosa, los mando al inicio
];
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DetalleProducto } from "./components/detalle-producto/detalle-producto";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DetalleProducto],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}

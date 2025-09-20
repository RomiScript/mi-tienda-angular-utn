import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductoService } from '../../services/producto';
import { Producto } from '../../../assets/models/producto-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // Necesito RouterLink para navegar al detalle
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  // Uso una signal para guardar los productos. Es la forma más nueva y reactiva.
  public productos = signal<Producto[]>([]);
  private productoService = inject(ProductoService);

  ngOnInit(): void {
    // Apenas carga el componente, le pido los productos al servicio.
    this.productoService.getProductos().subscribe({
      next: (data) => {
        // Cuando llegan los datos, los guardo en mi signal.
        this.productos.set(data);
      },
      error: (err) => {
        console.error('Che, se rompió al traer los productos:', err);
      }
    });
  }
}
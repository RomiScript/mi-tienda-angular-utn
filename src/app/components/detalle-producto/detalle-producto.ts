import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto';
import { Producto } from '../../../assets/models/producto-model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [RouterLink, CurrencyPipe], 
  templateUrl: './detalle-producto.html',
  styleUrls: ['./detalle-producto.css']
})
export class DetalleProducto implements OnInit {

  // Signals para el producto y para saber si está cargando.
  public producto = signal<Producto | undefined>(undefined);
  public cargando = signal<boolean>(true);
  
  private route = inject(ActivatedRoute);
  private productoService = inject(ProductoService);

  ngOnInit(): void {
    // Saco el id que viene en la URL (ej: /producto/2)
    const idProducto = this.route.snapshot.paramMap.get('id');
    
    if (idProducto) {
      // Le pido al servicio el producto específico usando el ID.
      this.productoService.getProductoPorId(Number(idProducto)).subscribe({
        next: (data) => {
          this.producto.set(data);
          this.cargando.set(false);
        },
        error: (err) => {
          console.error("No se pudo cargar el producto, ¡qué macana!", err);
          this.cargando.set(false);
        }
      });
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Producto } from '../../assets/models/producto-model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // Inyecto el HttpClient para poder hacer pedidos a mi archivo JSON.
  private http = inject(HttpClient);
  private productosUrl = './assets/data/productos.json';

  // Este método me va a traer toda la lista de productos.
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl);
  }

  // Este me va a traer un solo producto buscando por su ID.
  getProductoPorId(id: number): Observable<Producto | undefined> {
    return this.getProductos().pipe(
      map(productos => productos.find(p => p.id === id))
    );
  }
}
// Defino la estructura de mis productos para que todo el código sepa qué esperar.
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagenUrl: string;
}
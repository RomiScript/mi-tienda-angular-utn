import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  // Para los formularios reactivos necesito importar ReactiveFormsModule
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  
  // Inyecto FormBuilder para crear el formulario más fácil.
  private fb = inject(FormBuilder);

  // Acá armo mi formulario con sus campos y validaciones.
  public miFormulario: FormGroup = this.fb.group({
    // El campo 'nombre' es obligatorio.
    nombre: ['', [Validators.required]],
    // El 'email' es obligatorio y tiene que tener formato de email.
    email: ['', [Validators.required, Validators.email]],
    // El 'mensaje' es obligatorio y pido que tenga al menos 10 letras.
    mensaje: ['', [Validators.required, Validators.minLength(10)]]
  });

  // Esta función se va a ejecutar cuando mande el formulario.
  enviarFormulario() {
    if (this.miFormulario.invalid) {
      // Si el formulario no es válido, marco todos los campos como "tocados" para que se muestren los errores.
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    // Si todo está bien...
    console.log('¡Formulario enviado! Mirá la data: ', this.miFormulario.value);
    // Acá iría la lógica para mandarlo a un servidor, pero por ahora lo muestro en consola.
    alert('¡Gracias por tu mensaje! Te responderemos a la brevedad.');
    this.miFormulario.reset();
  }

  // Una función chiquita para chequear fácil si un campo tiene errores.
  campoEsInvalido(campo: string): boolean {
    const control = this.miFormulario.get(campo);
    return !!(control && control.invalid && control.touched);
  }
}
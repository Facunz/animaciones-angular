/* [03] app.ts
  3 - Componente raíz (App): contiene la lógica de transición entre rutas
  Aquí se define el trigger 'routeAnimations' usado por el router outlet.
*/
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  query,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app-routing.css',
  animations: [
    // Animación entre rutas
    trigger('routeAnimations', [
      transition('HomePage <=> AnimationsPage', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(100%)' })
        ], { optional: true }),
        query(':leave', [
          animate('100ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
        ], { optional: true }),
        query(':enter', [
          animate('100ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class App {
  
  // Preparar ruta para animación
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || 'HomePage';
  }
}

/* [02] app.routes.ts
  2 - Definición de rutas: conecta Home y Animations (data.animation usado para transiciones)
  Explicar lazy-loading y route data a los alumnos.
*/
import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    data: { animation: 'HomePage' }
  },
  { 
    path: 'animations', 
    loadComponent: () => import('./components/animations/animations.component').then(m => m.AnimationsComponent),
    data: { animation: 'AnimationsPage' }
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];

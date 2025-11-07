/* [01] app.config.ts
  1 - Configuración principal: providers (rutas, animaciones y detección de cambios)
  Útil para explicar a alumnos cómo se habilitan las animaciones y el router.
*/
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; // Importa el proveedor de rutas
import { provideAnimations } from '@angular/platform-browser/animations'; // Importa el proveedor de animaciones

import { routes } from './app.routes'; // Importa las rutas definidas

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Maneja errores globales del navegador
    provideZoneChangeDetection({ eventCoalescing: true }), // Optimiza la detección de cambios
    provideRouter(routes), // Configura el sistema de rutas
    provideAnimations() // Habilita las animaciones de Angular
  ]
};

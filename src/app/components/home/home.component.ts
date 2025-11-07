/* [09] components/home/home.component.ts
  9 - Componente Home: introducción y acceso a la página de animaciones (menos técnico)
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  showDocumentation = false;

  // Documentación de animaciones con ejemplos para sala de juegos
  animationsDoc = [
    {
      name: 'Fade In/Out',
      description: 'Controla la opacidad para aparecer/desaparecer elementos',
      gameExamples: [
        '🎯 Mostrar/ocultar menús de pausa durante el juego',
        '💫 Efectos de spawn/despawn de personajes o items'
      ]
    },
    {
      name: 'Slide In/Out',
      description: 'Desliza elementos horizontalmente dentro/fuera de la pantalla',
      gameExamples: [
        '📋 Paneles de inventario que se deslizan desde el lateral',
        '🎮 Menús de chat que aparecen/desaparecen suavemente'
      ]
    },
    {
      name: 'Expand/Collapse',
      description: 'Cambia dinámicamente la altura de elementos',
      gameExamples: [
        '📈 Barras de estadísticas que se expanden al hover',
        '🗂️ Acordeones de configuraciones del juego'
      ]
    },
    {
      name: 'List Stagger',
      description: 'Animación escalonada con efecto visual secuencial',
      gameExamples: [
        '🏆 Lista de puntuaciones que aparecen una tras otra',
        '🎪 Items del inventario que se muestran en cascada'
      ]
    },
    {
      name: 'Rotate',
      description: 'Gira elementos 360 grados con transiciones suaves',
      gameExamples: [
        '🎰 Ruletas y ruedas de la fortuna en mini-juegos',
        '⚙️ Iconos de configuración que giran al activarse'
      ]
    },
    {
      name: 'Zoom In/Out',
      description: 'Escala elementos para enfocar/desenfocar',
      gameExamples: [
        '🔍 Hover effects en cartas o items importantes',
        '📺 Transiciones de zoom al cambiar de vista/cámara'
      ]
    },
    {
      name: 'Flip',
      description: 'Voltea elementos en el eje Y como cartas',
      gameExamples: [
        '🃏 Cartas que se voltean para revelar contenido',
        '🪙 Monedas que giran al ser recolectadas'
      ]
    },
    {
      name: 'Shake',
      description: 'Efecto de temblor para indicar errores o impacto',
      gameExamples: [
        '⚠️ Feedback visual cuando el jugador comete un error',
        '💥 Efectos de impacto cuando recibe daño'
      ]
    },
    {
      name: 'Pulse',
      description: 'Latido suave para llamar la atención',
      gameExamples: [
        '🔔 Notificaciones importantes que requieren atención',
        '💎 Items raros o especiales que pulsan suavemente'
      ]
    },
    {
      name: 'Bounce',
      description: 'Rebote elástico con múltiples saltos',
      gameExamples: [
        '🎾 Pelotas o proyectiles que rebotan físicamente',
        '⭐ Efectos de recompensa cuando se obtienen logros'
      ]
    },
    {
      name: 'Swing',
      description: 'Balanceo pendular suave de lado a lado',
      gameExamples: [
        '🗡️ Armas colgantes o pendientes en el ambiente',
        '🕰️ Péndulos y elementos decorativos animados'
      ]
    },
    {
      name: 'Wobble',
      description: 'Bamboleado irregular con movimiento impredecible',
      gameExamples: [
        '🍯 Elementos gelatinosos o líquidos al interactuar',
        '😵 Efectos de mareo o desorientación del personaje'
      ]
    },
    {
      name: 'Glow',
      description: 'Efecto de resplandor para resaltar elementos',
      gameExamples: [
        '✨ Items mágicos o encantados que brillan',
        '🎯 Objetivos activos o puntos de interacción'
      ]
    },
    {
      name: 'Heart Beat',
      description: 'Latido rítmico doble como corazón',
      gameExamples: [
        '❤️ Indicador de vida cuando la salud está baja',
        '💓 Efectos de tensión en momentos críticos del juego'
      ]
    }
  ];
  
  constructor(private router: Router) { }

  // Navegar a la página de animaciones
  goToAnimations() {
    this.router.navigate(['/animations']);
  }


  // Abrir popup de documentación
  openDocumentation() {
    this.showDocumentation = true;
  }

  // Cerrar popup de documentación
  closeDocumentation() {
    this.showDocumentation = false;
  }
}
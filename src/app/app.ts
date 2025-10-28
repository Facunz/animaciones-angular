import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    // Fade In / Fade Out - Controla la opacidad del elemento
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })), // Elemento completamente visible
      state('hidden', style({ opacity: 0 })), // Elemento completamente transparente
      transition('visible <=> hidden', animate('3400ms ease-in-out')) // Transición suave de 500ms
    ]),

    // Slide In / Slide Out - Desliza el elemento horizontalmente
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })), // Elemento en posición normal
      state('out', style({ transform: 'translateX(-100%)' })), // Elemento deslizado fuera de vista
      transition('in <=> out', animate('900ms ease-in-out')) // Animación de deslizamiento de 400ms
    ]),

    // Expand / Collapse - Cambia la altura del elemento
    trigger('expandCollapse', [
      state('expanded', style({ height: '*', opacity: 1 })), // Altura automática y visible
      state('collapsed', style({ height: '0px', opacity: 0 })), // Sin altura y transparente
      transition('expanded <=> collapsed', animate('300ms ease-in-out')) // Transición de expansión/colapso
    ]),

    // List Stagger - Animación escalonada con efecto visual
    trigger('listStagger', [
      state('normal', style({ transform: 'scale(3)', opacity: 1 })), // Estado normal del elemento
      state('staggered', style({ transform: 'scale(0.05)', opacity: 1 })), // Estado escalonado ligeramente más grande
      transition('normal => staggered', [ // Transición hacia el estado escalonado
        animate('3000ms ease-out', keyframes([ // Animación con keyframes personalizados
          style({ transform: 'scale(1)', opacity: 1, offset: 0 }), // Punto inicial
          style({ transform: 'scale(2.1)', opacity: 0, offset: 0.5 }), // Punto medio con escala mayor
          style({ transform: 'scale(0.05)', opacity: 1, offset: 1 }) // Punto final
        ]))
      ]),
      transition('staggered => normal', animate('1000ms ease-in')) // Transición de vuelta al estado normal
    ]),

    // Rotate - Gira el elemento 360 grados
    trigger('rotate', [
      state('normal', style({ transform: 'rotate(0deg)' })), // Sin rotación
      state('rotated', style({ transform: 'rotate(360deg)' })), // Rotación completa de 360°
      transition('normal <=> rotated', animate('600ms ease-in-out')) // Animación de rotación de 600ms
    ]),

    // Zoom In / Out - Cambia el tamaño del elemento
    trigger('zoomInOut', [
      state('normal', style({ transform: 'scale(0.5)' })), // Tamaño normal (100%)
      state('zoomed', style({ transform: 'scale(1.9)' })), // Tamaño aumentado (120%)
      transition('normal <=> zoomed', animate('300ms ease-in-out')) // Transición de zoom de 300ms
    ]),

    // Flip - Voltea el elemento en el eje Y
    trigger('flip', [
      state('front', style({ transform: 'rotateY(0deg)' })), // Cara frontal del elemento
      state('back', style({ transform: 'rotateY(360deg)' })), // Cara posterior (volteado)
      transition('front <=> back', animate('1000ms ease-in-out')) // Animación de volteo de 600ms
    ]),

    // Shake - Crea un efecto de temblor horizontal
    trigger('shake', [
      state('normal', style({ transform: 'translateX(0)' })), // Posición normal sin movimiento
      state('shaking', style({ transform: 'translateX(0)' })), // Estado de temblor
      transition('normal => shaking', [ // Transición hacia el temblor
        animate('1500ms', keyframes([ // Animación con keyframes para crear el efecto de temblor
          style({ transform: 'translateX(0)', offset: 0 }), // Inicio en posición normal
          style({ transform: 'translateX(-100px)', offset: 0.1 }), // Movimiento a la izquierda
          style({ transform: 'translateY(40px)', offset: 0.2 }), // Movimiento a la derecha
          style({ transform: 'translateX(-20px)', offset: 0.3 }), // Izquierda otra vez
          style({ transform: 'translateX(10px)', offset: 0.4 }), // Derecha otra vez
          style({ transform: 'translateY(-10px)', offset: 0.5 }), // Continúa el patrón
          style({ transform: 'translateY(100px)', offset: 0.6 }), // de temblor
          style({ transform: 'translateX(-40px)', offset: 0.7 }), // alternando
          style({ transform: 'translateX(100px)', offset: 0.8 }), // entre izquierda
          style({ transform: 'translateX(-200px)', offset: 0.9 }), // y derecha
          style({ transform: 'translateX(10px)', offset: 1 }) // Regresa a posición normal
        ]))
      ]),
      transition('shaking => normal', animate('0ms')) // Regreso instantáneo al estado normal
    ]),

    // Pulse - Crea un efecto de latido suave
    trigger('pulse', [
      state('normal', style({ transform: 'scale(1)' })), // Tamaño normal
      state('pulsing', style({ transform: 'scale(1)' })), // Estado de pulsación
      transition('normal => pulsing', [ // Transición hacia la pulsación
        animate('1000ms', keyframes([ // Animación lenta de 1 segundo
          style({ transform: 'scale(0.51)', offset: 0 }), // Inicio en tamaño normal
          style({ transform: 'scale(2.1)', offset: 0.5 }), // Crecimiento a la mitad de la animación
          style({ transform: 'scale(1.5)', offset: 1 }) // Regreso al tamaño normal
        ]))
      ]),
      transition('pulsing => normal', animate('0ms')) // Regreso instantáneo
    ]),

    // Slide Transition para cambio de vistas
    trigger('slideTransition', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ]),

    // Route Animations
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' })
        ], { optional: true }),
        query(':leave', [
          animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class App {
  protected readonly title = signal('animaciones-angular');

  // Control de vista
  showView = true;

  // Estados de animaciones clásicas
  fadeState = 'visible'; // Estado inicial de fade (visible)
  slideState = 'in'; // Estado inicial de slide (dentro)
  expandState = 'expanded'; // Estado inicial de expand (expandido)
  staggerState = 'normal'; // Estado inicial de stagger (normal)
  rotateState = 'normal'; // Estado inicial de rotate (sin rotación)
  zoomState = 'normal'; // Estado inicial de zoom (tamaño normal)

  constructor(private router: Router) { }

  // Cambiar entre vistas
  toggleView() {
    this.showView = !this.showView;
  }

  // Manejar eventos de mouse para animaciones clásicas
  onMouseEnter(animationType: string) {
    switch (animationType) {
      case 'fade':
        this.fadeState = 'hidden';
        break;
      case 'slide':
        this.slideState = 'out';
        break;
      case 'expand':
        this.expandState = 'collapsed';
        break;
      case 'stagger':
        this.staggerState = 'staggered'; // Cambia al estado escalonado
        break;
      case 'rotate':
        this.rotateState = 'rotated';
        break;
      case 'zoom':
        this.zoomState = 'zoomed';
        break;
      case 'flip':
        this.flipState = 'back';
        break;
      case 'shake':
        this.shakeState = 'shaking';
        break;
      case 'pulse':
        this.pulseState = 'pulsing';
        break;
    }
  }

  // Manejar eventos de mouse leave
  onMouseLeave(animationType: string) {
    switch (animationType) {
      case 'fade':
        this.fadeState = 'visible';
        break;
      case 'slide':
        this.slideState = 'in';
        break;
      case 'expand':
        this.expandState = 'expanded'; // Regresa al estado expandido
        break;
      case 'stagger':
        this.staggerState = 'normal'; // Regresa al estado normal
        break;
      case 'rotate':
        this.rotateState = 'normal';
        break;
      case 'zoom':
        this.zoomState = 'normal';
        break;
      case 'flip':
        this.flipState = 'front';
        break;
      case 'shake':
        this.shakeState = 'normal';
        break;
      case 'pulse':
        this.pulseState = 'normal';
        break;
    }
  }
}

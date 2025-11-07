/* [07] components/animations/animations.component.ts
  7 - Lógica de las animaciones: triggers, estados y handlers (archivo central de animaciones)
*/
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animations.component.html',
  styleUrl: '../../app.css',
  animations: [
    // Todas las animaciones del app.ts original
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0.5 })),
      transition('visible <=> hidden', animate('1000ms ease-in-out'))
    ]),
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(-30%)' })),
      state('out', style({ transform: 'translateX(100%)' })),
      transition('in <=> out', animate('400ms ease-in-out'))
    ]),
    trigger('expandCollapse', [
      state('expanded', style({ height: '*', opacity: 1 })),
      state('collapsed', style({ height: '0px', opacity: 0.4 })),
      transition('expanded <=> collapsed', animate('300ms ease-in-out'))
    ]),
    trigger('listStagger', [
      state('normal', style({ transform: 'scale(0.5)', opacity: 1 })),
      state('staggered', style({ transform: 'scale(2.05)', opacity: 1 })),
      transition('normal => staggered', [
        animate('5000ms ease-out', keyframes([
          style({ transform: 'scale(1)', opacity: 1, offset: 0 }),
          style({ transform: 'scale(1.1)', opacity: 0, offset: 0.5 }),
          style({ transform: 'scale(0.5)', opacity: 1, offset: 1 })
        ]))
      ]),
      transition('staggered => normal', animate('2000ms ease-in'))
    ]),
    trigger('rotate', [
      state('normal', style({ transform: 'rotate(50deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('normal <=> rotated', animate('1000ms ease-in-out'))
    ]),
    trigger('zoomInOut', [
      state('normal', style({ transform: 'scale(0.5)' })),
      state('zoomed', style({ transform: 'scale(2.2)' })),
      transition('normal <=> zoomed', animate('4900ms ease-in-out'))
    ]),
    trigger('flip', [
      state('front', style({ transform: 'rotateY(0deg)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front <=> back', animate('600ms ease-in-out'))
    ]),
    trigger('shake', [
      state('normal', style({ transform: 'translateX(0)' })),
      state('shaking', style({ transform: 'translateX(0)' })),
      transition('normal => shaking', [
        animate('500ms', keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-10px)', offset: 0.1 }),
          style({ transform: 'translateX(10px)', offset: 0.2 }),
          style({ transform: 'translateX(-10px)', offset: 0.3 }),
          style({ transform: 'translateX(10px)', offset: 0.4 }),
          style({ transform: 'translateX(-10px)', offset: 0.5 }),
          style({ transform: 'translateX(10px)', offset: 0.6 }),
          style({ transform: 'translateX(-10px)', offset: 0.7 }),
          style({ transform: 'translateX(10px)', offset: 0.8 }),
          style({ transform: 'translateX(-10px)', offset: 0.9 }),
          style({ transform: 'translateX(0)', offset: 1 })
        ]))
      ]),
      transition('shaking => normal', animate('0ms'))
    ]),
    trigger('pulse', [
      state('normal', style({ transform: 'scale(1)' })),
      state('pulsing', style({ transform: 'scale(1)' })),
      transition('normal => pulsing', [
        animate('1000ms', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.1)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ]),
      transition('pulsing => normal', animate('0ms'))
    ]),
    trigger('bounce', [
      state('normal', style({ transform: 'translateY(0)' })),
      state('bouncing', style({ transform: 'translateY(0)' })),
      transition('normal => bouncing', [
        animate('1700ms', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-100px)', offset: 0.1 }),
          style({ transform: 'translateY(0)', offset: 0.2 }),
          style({ transform: 'translateY(-80px)', offset: 0.3 }),
          style({ transform: 'translateY(0)', offset: 0.4 }),
          style({ transform: 'translateY(-65px)', offset: 0.5 }),
          style({ transform: 'translateY(0)', offset: 0.6 }),
          style({ transform: 'translateY(-30px)', offset: 0.7 }),
          style({ transform: 'translateY(0)', offset: 0.8 }),
          style({ transform: 'translateY(-10px)', offset: 0.9 }),
          style({ transform: 'translateY(0)', offset: 1 }),
        ]))
      ]),
      transition('bouncing => normal', animate('0ms'))
    ]),
    trigger('swing', [
      state('normal', style({ transform: 'rotateZ(0deg)' })),
      state('swinging', style({ transform: 'rotateZ(0deg)' })),
      transition('normal => swinging', [
        animate('1000ms', keyframes([
          style({ transform: 'rotateZ(0deg)', offset: 0 }),
          style({ transform: 'rotateZ(65deg)', offset: 0.2 }),
          style({ transform: 'rotateZ(-20deg)', offset: 0.4 }),
          style({ transform: 'rotateZ(15deg)', offset: 0.6 }),
          style({ transform: 'rotateZ(-15deg)', offset: 0.8 }),
          style({ transform: 'rotateZ(0deg)', offset: 1 })
        ]))
      ]),
      transition('swinging => normal', animate('0ms'))
    ]),
    trigger('wobble', [
      state('normal', style({ transform: 'translateX(0) rotateZ(0deg)' })),
      state('wobbling', style({ transform: 'translateX(0) rotateZ(0deg)' })),
      transition('normal => wobbling', [
        animate('600ms', keyframes([
          style({ transform: 'translateX(0) rotateZ(0deg)', offset: 0 }),
          style({ transform: 'translateX(-25px) rotateZ(-5deg)', offset: 0.15 }),
          style({ transform: 'translateX(20px) rotateZ(3deg)', offset: 0.3 }),
          style({ transform: 'translateX(-15px) rotateZ(-3deg)', offset: 0.45 }),
          style({ transform: 'translateX(10px) rotateZ(2deg)', offset: 0.6 }),
          style({ transform: 'translateX(-5px) rotateZ(-1deg)', offset: 0.75 }),
          style({ transform: 'translateX(0) rotateZ(0deg)', offset: 1 })
        ]))
      ]),
      transition('wobbling => normal', animate('0ms'))
    ]),
    trigger('glow', [
      state('normal', style({ filter: 'drop-shadow(0 0 0px transparent)' })),
      state('glowing', style({ filter: 'drop-shadow(0 0 90px #174cd4ff)' })),
      transition('normal <=> glowing', animate('400ms ease-in-out'))
    ]),
    trigger('heartBeat', [
      state('normal', style({ transform: 'scale(1)' })),
      state('beating', style({ transform: 'scale(1)' })),
      transition('normal => beating', [
        animate('1200ms', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.3)', offset: 0.14 }),
          style({ transform: 'scale(1)', offset: 0.28 }),
          style({ transform: 'scale(1.3)', offset: 0.42 }),
          style({ transform: 'scale(1)', offset: 0.7 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ]),
      transition('beating => normal', animate('0ms'))
    ]),
    trigger('slideTransition', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('5000ms ease-in-out', style({ transform: 'translateX(0)', opacity: 0.5 }))
      ]),
      transition(':leave', [
        animate('100ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class AnimationsComponent {
  protected readonly title = signal('animaciones-angular');

  // Control de vista
  showView = true;

  // Estados de animaciones
  fadeState = 'hidden';
  slideState = 'in';
  expandState = 'expanded';
  staggerState = 'normal';
  rotateState = 'normal';
  zoomState = 'normal';
  flipState = 'front';
  shakeState = 'normal';
  pulseState = 'normal';
  bounceState = 'normal';
  swingState = 'normal';
  wobbleState = 'normal';
  glowState = 'normal';
  heartBeatState = 'normal';

  constructor(private router: Router) { }

  // Cambiar entre vistas
  toggleView() {
    this.showView = !this.showView;
  }

  // Volver al home
  goHome() {
    this.router.navigate(['/']);
  }

  // Manejar eventos de mouse
  onMouseEnter(animationType: string) {
    switch (animationType) {
      case 'fade': this.fadeState = 'hidden'; break;
      case 'slide': this.slideState = 'out'; break;
      case 'expand': this.expandState = 'collapsed'; break;
      case 'stagger': this.staggerState = 'staggered'; break;
      case 'rotate': this.rotateState = 'rotated'; break;
      case 'zoom': this.zoomState = 'zoomed'; break;
      case 'flip': this.flipState = 'back'; break;
      case 'shake': this.shakeState = 'shaking'; break;
      case 'pulse': this.pulseState = 'pulsing'; break;
      case 'bounce': this.bounceState = 'bouncing'; break;
      case 'swing': this.swingState = 'swinging'; break;
      case 'wobble': this.wobbleState = 'wobbling'; break;
      case 'glow': this.glowState = 'glowing'; break;
      case 'heartbeat': this.heartBeatState = 'beating'; break;
    }
  }

  onMouseLeave(animationType: string) {
    switch (animationType) {
      case 'fade': this.fadeState = 'visible'; break;
      case 'slide': this.slideState = 'in'; break;
      case 'expand': this.expandState = 'expanded'; break;
      case 'stagger': this.staggerState = 'normal'; break;
      case 'rotate': this.rotateState = 'normal'; break;
      case 'zoom': this.zoomState = 'normal'; break;
      case 'flip': this.flipState = 'front'; break;
      case 'shake': this.shakeState = 'normal'; break;
      case 'pulse': this.pulseState = 'normal'; break;
      case 'bounce': this.bounceState = 'normal'; break;
      case 'swing': this.swingState = 'normal'; break;
      case 'wobble': this.wobbleState = 'normal'; break;
      case 'glow': this.glowState = 'normal'; break;
      case 'heartbeat': this.heartBeatState = 'normal'; break;
    }
  }
}
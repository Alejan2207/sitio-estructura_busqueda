import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerList', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Inicio {
  // Lista de características para animar
  features = [
    {
      title: 'Elementos del Sitio',
      description: 'Descubre las piezas clave de una interfaz web: Header, Main, Footer, y cómo se organizan para crear una experiencia coherente.',
      icon: '🎨',
      route: '/elementos-sitio',
      color: 'primary'
    },
    {
      title: 'Navegación',
      description: 'Aprende sobre los sistemas que permiten al usuario moverse por el sitio: Menús, Breadcrumbs y Mapas del Sitio.',
      icon: '🧭',
      route: '/menu',
      color: 'secondary'
    },
    {
      title: 'Búsqueda Avanzada',
      description: 'Implementación de filtros y búsquedas dinámicas para encontrar contenido rápidamente.',
      icon: '🔍',
      route: '/busqueda',
      color: 'accent'
    }
  ];
}

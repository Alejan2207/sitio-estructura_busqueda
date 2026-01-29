import { Component, signal, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
  active: boolean;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs implements OnInit {
  breadcrumbs = signal<Breadcrumb[]>([]);

  // Mapping de rutas a labels
  private routeLabels: { [key: string]: string } = {
    '': 'Inicio',
    'elementos-sitio': 'Elementos del Sitio',
    'menu': 'Menú',
    'breadcrumbs': 'Breadcrumbs',
    'mapa-sitio': 'Mapa del Sitio',
    'busqueda': 'Búsqueda',
    'error-404': 'Error 404'
  };

  constructor(private router: Router) { }

  ngOnInit() {
    // Actualizar breadcrumbs en la navegación inicial
    this.updateBreadcrumbs(this.router.url);

    // Escuchar cambios de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateBreadcrumbs(event.url);
      });
  }

  private updateBreadcrumbs(url: string): void {
    const crumbs: Breadcrumb[] = [
      { label: 'Inicio', url: '/', active: false }
    ];

    // Limpiar query params y hash
    const cleanUrl = url.split('?')[0].split('#')[0];

    // Split path
    const paths = cleanUrl.split('/').filter(p => p);

    let currentUrl = '';
    paths.forEach((path, index) => {
      currentUrl += `/${path}`;
      const isLast = index === paths.length - 1;

      crumbs.push({
        label: this.routeLabels[path] || path,
        url: currentUrl,
        active: isLast
      });
    });

    this.breadcrumbs.set(crumbs);
  }
}

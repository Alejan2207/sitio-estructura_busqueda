import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  mobileMenuOpen = signal(false);

  navItems = [
    { label: 'Inicio', route: '/', icon: '🏠' },
    { label: 'Elementos del Sitio', route: '/elementos-sitio', icon: '🎨' },
    { label: 'Menú', route: '/menu', icon: '📋' },
    { label: 'Breadcrumbs', route: '/breadcrumbs', icon: '🧭' },
    { label: 'Mapa del Sitio', route: '/mapa-sitio', icon: '🗺️' },
    { label: 'Búsqueda', route: '/busqueda', icon: '🔍' }
  ];

  tiposMenu = [
    {
      id: 'header',
      title: 'Menú de Header (Principal)',
      icon: '📌',
      description: 'El menú más común, ubicado en la parte superior del sitio. Siempre visible y fácilmente accesible.',
      caracteristicas: ['Siempre visible (sticky)', 'Enlaces principales', 'Logo del sitio', 'Call-to-action']
    },
    {
      id: 'hamburger',
      title: 'Menú Hamburguesa',
      icon: '☰',
      description: 'Diseño responsivo para dispositivos móviles. Se despliega al hacer clic en el ícono de tres líneas.',
      caracteristicas: ['Ahorra espacio', 'Diseño móvil', 'Animación de apertura', 'Overlay opcional']
    },
    {
      id: 'footer',
      title: 'Menú de Footer',
      icon: '🔗',
      description: 'Enlaces adicionales en el pie de página. Incluye información legal y enlaces secundarios.',
      caracteristicas: ['Enlaces legales', 'Redes sociales', 'Contacto', 'Sitemap']
    },
    {
      id: 'sidebar',
      title: 'Menú Lateral (Sidebar)',
      icon: '📑',
      description: 'Menú fijo o colapsable en un lateral. Común en dashboards y aplicaciones.',
      caracteristicas: ['Navegación profunda', 'Submenús anidados', 'Siempre accesible', 'Puede ser colapsable']
    }
  ];

  constructor(public router: Router) { }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}

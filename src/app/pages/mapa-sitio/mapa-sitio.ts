import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

interface SiteNode {
  label: string;
  route: string;
  icon: string;
  children?: SiteNode[];
}

@Component({
  selector: 'app-mapa-sitio',
  imports: [RouterModule],
  templateUrl: './mapa-sitio.html',
  styleUrl: './mapa-sitio.css',
})
export class MapaSitio {
  siteMap: SiteNode = {
    label: 'Inicio',
    route: '/',
    icon: '🏠',
    children: [
      {
        label: 'Estructura',
        route: '',
        icon: '🎨',
        children: [
          { label: 'Elementos del Sitio', route: '/elementos-sitio', icon: '📄' }
        ]
      },
      {
        label: 'Navegación',
        route: '',
        icon: '🧭',
        children: [
          { label: 'Menú', route: '/menu', icon: '📋' },
          { label: 'Breadcrumbs', route: '/breadcrumbs', icon: '🔗' },
          { label: 'Mapa del Sitio', route: '/mapa-sitio', icon: '🗺️' }
        ]
      },
      {
        label: 'Funcionalidades',
        route: '',
        icon: '⚡',
        children: [
          { label: 'Búsqueda', route: '/busqueda', icon: '🔍' }
        ]
      }
    ]
  };

  tiposMapa = [
    {
      id: 'html',
      title: 'Mapa HTML',
      icon: '📄',
      description: 'Página visible para usuarios con enlaces organizados jerárquicamente.',
      usos: ['Ayuda a navegación', 'Mejora UX', 'Acceso rápido', 'Overview del sitio']
    },
    {
      id: 'xml',
      title: 'Sitemap XML',
      icon: '🤖',
      description: 'Archivo XML para motores de búsqueda que lista todas las URLs del sitio.',
      usos: ['SEO', 'Indexación Google', 'Crawling eficiente', 'Priorización de URLs']
    },
    {
      id: 'visual',
      title: 'Mapa Visual',
      icon: '🎨',
      description: 'Representación gráfica de la estructura del sitio (organigrama).',
      usos: ['Planificación', 'Presentaciones', 'Documentación', 'Arquitectura de información']
    }
  ];
}

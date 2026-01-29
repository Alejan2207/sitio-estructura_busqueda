import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-elementos-sitio',
  imports: [RouterModule],
  templateUrl: './elementos-sitio.html',
  styleUrl: './elementos-sitio.css',
})
export class ElementosSitio {
  elementos = [
    {
      id: 'header',
      title: 'Header',
      icon: '🎯',
      description: 'La cabecera del sitio contiene el logo, navegación principal y elementos de identidad visual.',
      features: ['Logo', 'Navegación principal', 'Búsqueda', 'Usuario/Login']
    },
    {
      id: 'main',
      title: 'Main (Contenido Principal)',
      icon: '📄',
      description: 'El área principal donde se muestra el contenido específico de cada página.',
      features: ['Artículos', 'Secciones', 'Imágenes', 'Formularios']
    },
    {
      id: 'aside',
      title: 'Aside (Sidebar)',
      icon: '📌',
      description: 'Contenido complementario o secundario relacionado con el contenido principal.',
      features: ['Widgets', 'Enlaces relacionados', 'Publicidad', 'Información extra']
    },
    {
      id: 'footer',
      title: 'Footer',
      icon: '🔗',
      description: 'Pie de página con información legal, enlaces adicionales y datos de contacto.',
      features: ['Copyright', 'Enlaces legales', 'Redes sociales', 'Contacto']
    },
    {
      id: 'nav',
      title: 'Nav (Navegación)',
      icon: '🧭',
      description: 'Sección dedicada a la navegación del sitio, puede estar en header, footer o como componente separado.',
      features: ['Menú principal', 'Breadcrumbs', 'Menú móvil', 'Submenús']
    },
    {
      id: 'section',
      title: 'Section',
      icon: '📑',
      description: 'Agrupa contenido relacionado temáticamente dentro de una página.',
      features: ['Contenido agrupado', 'Títulos de sección', 'Bloques temáticos']
    }
  ];
}

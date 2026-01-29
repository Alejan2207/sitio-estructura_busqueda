export type SiteItemType = 'pagina' | 'seccion';

export type SiteItem = {
    id: string;
    title: string;
    description: string;
    path: string;                   // ruta Angular, ej: '/menu'
    type: SiteItemType;             // para filtrar (busqueda avanzada)
    section: string;                // para filtrar por tema/seccion
    keywords: string[];             // busqueda simple 
    otro?: string; // el simbolo de interrogación indica que el atributo es opcional
};

export const SITE_INDEX: SiteItem[] = [
    {
        id: 'inicio',
        title: 'Inicio',
        description: 'Página principal del proyecto de Estructura Web. Introducción y acceso rápido a las secciones.',
        path: '/',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['inicio', 'home', 'principal', 'estructura', 'bienvenida', 'introducción'],
        otro: 'asdasd'
    },
    {
        id: 'elementos-sitio',
        title: 'Elementos del sitio',
        description: 'identifica los elementos que componen un sitio web.',
        path: '/elementos-sitio',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['elementos', 'sitio', 'header', 'footer', 'main', 'layout'],
    },
    {
        id: 'menu',
        title: 'Menú',
        description: 'Elementos principales del menú web y su utilidad.',
        path: '/menu',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['menu', 'navegación', 'navbar', 'links', 'persistente', 'hamburguesa', 'footer'],
    },
    {
        id: 'breadcrumbs',
        title: 'Breadcrumbs',
        description: 'Describe el funcionamiento y utilidad de los breadcrumbs.',
        path: '/breadcrumbs',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['breadcrumbs', 'migas', 'ruta', 'navegación', 'ux', 'jerarquia', 'historial'],
    },
    {
        id: 'mapa-sitio',
        title: 'Mapa del sitio',
        description: 'Diseño del mapa del sitio y relación con la navegación.',
        path: '/mapa-sitio',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['mapa', 'sitio', 'sitemap', 'estructura', 'rutas', 'xml', 'googlebot'],
    },
    {
        id: 'errores-404',
        title: 'Error 404',
        description: 'Página para rutas no existentes (404).',
        path: '/no existe',
        type: 'seccion',
        section: 'Errores',
        keywords: ['404', 'error', 'no encontrado', 'ruta'],
    },
];
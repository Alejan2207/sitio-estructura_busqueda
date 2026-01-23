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
        id: 'menu',
        title: 'Inicio',
        description: 'Pagina principal del sitio de práctica',
        path: '/',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['inicio', 'home', 'principal', 'estructura'],
        otro: 'asdasd'
    },
    {
        id: 'elementos-sitio',
        title: 'Elementos del sitio',
        description: 'identifica los elementos que componen un sitio web.',
        path: '/elemntos',
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
        keywords: ['menu', 'navegación', 'navbar', 'links', 'persistente'],
    },
    {
        id: 'breadcrumbs',
        title: 'Breadcrumbs',
        description: 'Describe el funcionamiento y utilidad de los breadcrumbs.',
        path: '/breadcrumbs',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['breadcrumbs', 'migas', 'ruta', 'navegación', 'ux'],
    },
    {
        id: 'mapa-sitio',
        title: 'Mapa del sitio',
        description: 'Diseño del mapa del sitio y relación con la navegación.',
        path: '/mapa-sitio',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['mapa', 'sitio', 'sitemap', 'estructura', 'rutas'],
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
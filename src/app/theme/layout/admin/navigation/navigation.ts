import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },

     
      
    ]
 },
 {
  id: 'ui-element',
  title: 'UI ELEMENT',
  type: 'group',
  icon: 'feather icon-layers',
  children: [
    {
      id: 'gestionvehicule',
      title: 'Gestion Vehicule',
      type: 'collapse',
      icon: 'feather icon-box',
      children: [
        {
          id: 'leasing',
          title: 'Leasings',
          type: 'item',
          url: '/leasings',
          
        },
        {
          id: 'typevehicule',
          title: 'Types véhicule',
          type: 'item',
          url: '/typevehicule',
         
        },
        {
          id: 'soustypevehicule',
          title: 'Sous types véhicule',
          type: 'item',
          url: '/soustypevehicule',
         
        },
  
        {
          id: 'marqueVehicule',
          title: 'Marque Vehicule',
          type: 'item',
          url: '/marqueVehicule',
          
        },
        {
          id: 'modeleVehicule',
          title: 'Modèle Vehicule',
          type: 'item',
          url: '/modeleVehicule',
          
        },
        {
          id: 'visiteTechnique',
          title: 'Visite Technique',
          type: 'item',
          url: '/visiteTechnique',
          
        },
        {
          id: 'serviceMines',
          title: 'Service Mines',
          type: 'item',
          url: '/serviceMines',
          
        },
        {
          id: 'carteExploitation',
          title: 'Carte Exploitation',
          type: 'item',
          url: '/carteExploitation',
          
        },
        {
          id: 'TypeCarteExploitation',
          title: 'Type Carte Exploitation',
          type: 'item',
          url: '/TypeCarteExploitation',
          
        },
        {
          id: 'assurance',
          title: 'Assurance',
          type: 'item',
          url: '/assurance',
          
        },
        {
          id: 'typeAssurance',
          title: 'Type Assurance',
          type: 'item',
          url: '/typeAssurance',
          
        },
        {
          id: 'compagnieAssurance',
          title: 'Compagnie Assurance',
          type: 'item',
          url: '/compagnieAssurance',
         
        },
        
        {
          id: 'reglementPapierVehicule',
          title: 'Reglement Papier',
          type: 'item',
          url: '/reglementPapierVehicule',
          
        },
        {
          id: 'taxe',
          title: 'Taxe',
          type: 'item',
          url: '/taxe',
          
        },
        {
          id: 'depotTaxe',
          title: 'Depot Taxe',
          type: 'item',
          url: '/depotTaxe',
          
        },
        {
          id: 'receveurFinance',
          title: 'Receveur Finance',
          type: 'item',
          url: '/receveurFinance',
          
        },
        {
          id: 'permisCirculation',
          title: 'Permis Circulation',
          type: 'item',
          url: '/permisCirculation',
          
        },
      ]
    }
  ]
},
  // //////////////////////
  {
    id: 'ui-element',
    title: 'UI ELEMENT',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'basic',
        title: 'Basic',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'alert',
            title: 'Alert',
            type: 'item',
            url: '/basic/alert'
          },
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/basic/badges'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Breadcrumbs & Pagination',
            type: 'item',
            url: '/basic/breadcrumb-paging'
          },
          {
            id: 'cards',
            title: 'Cards',
            type: 'item',
            url: '/basic/cards'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: '/basic/collapse'
          },
          {
            id: 'carousel',
            title: 'Carousel',
            type: 'item',
            url: '/basic/carousel'
          },
          {
            id: 'grid-system',
            title: 'Grid System',
            type: 'item',
            url: '/basic/grid-system'
          },
          {
            id: 'progress',
            title: 'Progress',
            type: 'item',
            url: '/basic/progress'
          },
          {
            id: 'modal',
            title: 'Modal',
            type: 'item',
            url: '/basic/modal'
          },
          {
            id: 'spinner',
            title: 'Spinner',
            type: 'item',
            url: '/basic/spinner'
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & Pills',
            type: 'item',
            url: '/basic/tabs-pills'
          },
          {
            id: 'typography',
            title: 'Typography',
            type: 'item',
            url: '/basic/typography'
          },
          {
            id: 'tooltip-popovers',
            title: 'Tooltip & Popovers',
            type: 'item',
            url: '/basic/tooltip-popovers'
          },
          {
            id: 'toasts',
            title: 'Toasts',
            type: 'item',
            url: '/basic/toasts'
          },
          {
            id: 'other',
            title: 'Other',
            type: 'item',
            url: '/basic/other'
          }
        ]
      }
    ]
  },
  {
    id: 'forms',
    title: 'Forms & Table',
    type: 'group',
    icon: 'feather icon-layout',
    children: [
      {
        id: 'forms-element',
        title: 'Forms',
        type: 'item',
        url: '/forms/basic',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'bootstrap',
        title: 'Bootstrap',
        type: 'item',
        url: '/tbl-bootstrap/bt-basic',
        classes: 'nav-item',
        icon: 'feather icon-server'
      }
    ]
  },
  {
    id: 'chart-maps',
    title: 'Chart & Maps',
    type: 'group',
    icon: 'feather icon-pie-chart',
    children: [
      {
        id: 'charts',
        title: 'Charts',
        type: 'item',
        url: '/charts/apex',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      },
      {
        id: 'maps',
        title: 'Maps',
        type: 'item',
        url: '/maps/google',
        classes: 'nav-item',
        icon: 'feather icon-map'
      }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}

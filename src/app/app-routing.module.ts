import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'leasings',
        loadChildren: () => import('./Flotte/front/leasings/listeleasings/listeleasings.module').then(module => module.ListeleasingsModule)
      },
      {
        path: 'typevehicule',
        loadChildren: () => import('./Flotte/front/typevehicule/typevehicule.module').then(module => module.TypevehiculeModule)
      },
      {
        path: 'soustypevehicule',
        loadChildren: () => import('./Flotte/front/soustypevehicule/soustypevehicule.module').then(module => module.SoustypevehiculeModule)
      },

      {
        path: 'marqueVehicule',
        loadChildren: () => import('./Flotte/front/marque-vehicule/marque-vehicule.module').then(module => module.MarqueVehiculeModule)
      },
      {
        path: 'modeleVehicule',
        loadChildren: () => import('./Flotte/front/modelevehicule/modelevehicule.module').then(module => module.ModelevehiculeModule)
      },
      {
        path: 'visiteTechnique',
        loadChildren: () => import('./Flotte/front/visite-technique/visite-technique.module').then(module => module.VisiteTechniqueModule)
      },

      {
        path: 'carteExploitation',
        loadChildren: () => import('./Flotte/front/carte-exploitation/carte-exploitation.module').then(module => module.CarteExploitationModule)
      },
      {
        path: 'serviceMines',
        loadChildren: () => import('./Flotte/front/service-mines/service-mines.module').then(module => module.ServiceMinesModule)
      },
      {
        path: 'assurance',
        loadChildren: () => import('./Flotte/front/assurance/assurance.module').then(module => module.AssuranceModule)
      },
      {
        path: 'typeAssurance',
        loadChildren: () => import('./Flotte/front/type-assurance/type-assurance.module').then(module => module.TypeAssuranceModule)
      },
      {
        path: 'compagnieAssurance',
        loadChildren: () => import('./Flotte/front/compagnie-assurance/compagnie-assurance.module').then(module => module.CompagnieAssuranceModule)
      },
      {
        path: 'TypeCarteExploitation',
        loadChildren: () => import('./Flotte/front/type-carte-exploitation/type-carte-exploitation.module').then(module => module.TypeCarteExploitationModule)
      },
      // {
      //   path: 'ajoutleasing',
      //   loadChildren: () => import('./Flotte/front/leasings/ajoutleasing/ajoutleasing.module').then(module => module.AjoutleasingModule)
      // },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(module => module.CoreMapsModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

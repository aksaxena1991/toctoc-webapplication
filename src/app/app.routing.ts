import {Routes} from '@angular/router';
import {AdminComponent} from './modules/admin/admin.component';
import {AuthComponent} from './modules/auth/auth.component';
import { ProductsComponent} from './modules/admin/content/products/products.component';
import { RolesComponent} from './modules/admin/content/roles/roles.component';
import { CategoriesComponent} from './modules/admin/content/categories/categories.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
       {
        path: 'dashboard',
        loadChildren: './modules/admin/pages/dashboard/dashboard-default/dashboard-default.module#DashboardDefaultModule'
      }, {
        path: 'basic',
        loadChildren: './modules/admin/pages/ui-elements/basic/basic.module#BasicModule'
      }, {
        path: 'notifications',
        loadChildren: './modules/admin/pages/ui-elements/advance/notifications/notifications.module#NotificationsModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './modules/admin/pages/ui-elements/tables/basic-bootstrap.module#BasicBootstrapModule',
      }, {
        path: 'map',
        loadChildren: './modules/admin/pages/map/google-map/google-map.module#GoogleMapModule',
      }, {
        path: 'user',
        loadChildren: './modules/admin/pages/user/profile/profile.module#ProfileModule'
      }, {
        path: 'simple-page',
        loadChildren: './modules/admin/pages/simple-page/simple-page.module#SimplePageModule'
      }
    ]
  },
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {path: 'categories', loadChildren: './modules/admin/content/categories/categories.module#CategoriesModule'}
    ]
  },
  {
    path: '',
    component: ProductsComponent,
    children: [
      {path: 'products', loadChildren: './modules/admin/content/products/products.module#ProductsModule'}
    ]
  },
  {
    path: '',
    component: RolesComponent,
    children: [
      {path: 'roles', loadChildren: './modules/admin/content/roles/roles.module#RolesModule'}
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: './modules/auth/auth.module#AuthModule'
      }
    ]
  }
];

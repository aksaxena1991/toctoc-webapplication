import {Routes} from '@angular/router';
import {AdminComponent} from './modules/admin/admin.component';
import {AuthComponent} from './modules/auth/auth.component';
import { ProductsComponent} from './modules/admin/content/products/products.component';
import { RolesComponent} from './modules/admin/content/roles/roles.component';
import { CategoriesComponent} from './modules/admin/content/categories/categories.component';
import { CouponsComponent} from './modules/admin/content/coupons/coupons.component';
// import { AuthGuard } from './modules/guards/auth.guard';
export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
       {
        path: 'dashboard',
        loadChildren: './modules/admin/pages/dashboard/dashboard-default/dashboard.module#DashboardModule'
      }, {
        path: 'notifications',
        loadChildren: './modules/admin/pages/ui-elements/advance/notifications/notifications.module#NotificationsModule'
      }, {
        path: 'user',
        loadChildren: './modules/admin/pages/user/profile/profile.module#ProfileModule'
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
    component: CouponsComponent,
    children: [
      {path: 'coupons', loadChildren: './modules/admin/content/coupons/coupons.module#CouponsModule'}
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

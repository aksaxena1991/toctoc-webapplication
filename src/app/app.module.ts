import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppRoutes} from './app.routing';
import { AuthGuard } from './modules/guards/auth.guard';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/admin/admin.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {SharedModule} from './modules/admin/shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbsComponent} from './modules/admin/breadcrumbs/breadcrumbs.component';
import {TitleComponent} from './modules/admin/title/title.component';
import {AuthComponent} from './modules/auth/auth.component';
import {ProductsComponent} from './modules/admin/content/products/products.component';
import {RolesComponent} from './modules/admin/content/roles/roles.component';
import {CategoriesComponent} from './modules/admin/content/categories/categories.component';
import {CouponsComponent} from './modules/admin/content/coupons/coupons.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    ProductsComponent,
    RolesComponent,
    CategoriesComponent,
    CouponsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    ClickOutsideModule,
    SharedModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

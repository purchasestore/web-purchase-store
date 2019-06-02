import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { CategoriesComponent } from './components/features/categories/categories.component';
import { CompanyComponent } from './components/features/company/company.component';
import { CustomersComponent } from './components/features/customers/customers.component';
import { ProductsComponent } from './components/features/products/products.component';
import { PurchasesComponent } from './components/features/purchases/purchases.component';
import { ReportsComponent } from './components/features/reports/reports.component';
import { SalesComponent } from './components/features/sales/sales.component';
import { SuppliersComponent } from './components/features/suppliers/suppliers.component';
import { ProfileComponent } from './components/features/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    SidebarComponent,
    CategoriesComponent,
    CompanyComponent,
    CustomersComponent,
    ProductsComponent,
    PurchasesComponent,
    ReportsComponent,
    SalesComponent,
    SuppliersComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

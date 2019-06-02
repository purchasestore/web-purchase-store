import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/features/profile/profile.component';
import { CompanyComponent } from './components/features/company/company.component';
import { CustomersComponent } from './components/features/customers/customers.component';
import { SuppliersComponent } from './components/features/suppliers/suppliers.component';
import { CategoriesComponent } from './components/features/categories/categories.component';
import { ProductsComponent } from './components/features/products/products.component';
import { PurchasesComponent } from './components/features/purchases/purchases.component';
import { SalesComponent } from './components/features/sales/sales.component';
import { ReportsComponent } from './components/features/reports/reports.component';

const appRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'empresa', component: CompanyComponent },
  { path: 'clientes', component: CustomersComponent },
  { path: 'fornecedores', component: SuppliersComponent },
  { path: 'categorias', component: CategoriesComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'compras', component: PurchasesComponent },
  { path: 'vendas', component: SalesComponent },
  { path: 'relatorios', component: ReportsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

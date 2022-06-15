import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './master/brand/brand.component';
import { CategoryComponent } from './master/category/category.component';
import { DepartmentComponent } from './master/department/department.component';
import { ItemmasterComponent } from './master/itemmaster/itemmaster.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { UomComponent } from './master/uom/uom.component';
import { PurchasesreturnComponent } from './purchasesreturn/purchasesreturn.component';
import { SalesreturnComponent } from './salesreturn/salesreturn.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {path: '', component: ItemmasterComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'brand', component: BrandComponent},
  {path: 'uom', component: UomComponent},
  {path: 'purchase', component: PurchasesComponent},
  {path: 'purchase-return', component: PurchasesreturnComponent},
  {path: 'sales-return', component: SalesreturnComponent},
  {path: 'sale', component: SaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

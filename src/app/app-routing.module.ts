import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './master/brand/brand.component';
import { CategoryComponent } from './master/category/category.component';
import { DepartmentComponent } from './master/department/department.component';
import { ItemmasterComponent } from './master/itemmaster/itemmaster.component';

const routes: Routes = [
  {path: '', component: ItemmasterComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'brand', component: BrandComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

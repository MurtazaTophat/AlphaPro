import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './master/department/department.component';
import { ItemmasterComponent } from './master/itemmaster/itemmaster.component';

const routes: Routes = [
  {path: '', component: ItemmasterComponent},
  {path: 'department', component: DepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

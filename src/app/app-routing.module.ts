import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemmasterComponent } from './master/itemmaster/itemmaster.component';

const routes: Routes = [
  {path: '', component: ItemmasterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

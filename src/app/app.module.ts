import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { MasterComponent } from './master/master.component';
import { ItemmasterComponent } from './master/itemmaster/itemmaster.component';
import { AdditemmasterComponent } from './master/itemmaster/additemmaster/additemmaster.component';
import { EdititemmasterComponent } from './master/itemmaster/edititemmaster/edititemmaster.component';
import { CostComponent } from './master/itemmaster/additemmaster/cost/cost.component';
import { PriceComponent } from './master/itemmaster/additemmaster/price/price.component';
import { PackComponent } from './master/itemmaster/additemmaster/pack/pack.component';
import { AddpackingComponent } from './master/itemmaster/additemmaster/pack/addpacking/addpacking.component';
import { MiscellaneousComponent } from './master/itemmaster/additemmaster/miscellaneous/miscellaneous.component';
import { ImageComponent } from './master/itemmaster/additemmaster/image/image.component';
import { DescriptionComponent } from './master/itemmaster/additemmaster/description/description.component';
import { EditpackingComponent } from './master/itemmaster/additemmaster/pack/editpacking/editpacking.component';
import { DepartmentComponent } from './master/department/department.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdddepartmentComponent } from './master/department/adddepartment/adddepartment.component';
import { EditdepartmentComponent } from './master/department/editdepartment/editdepartment.component';
import { CategoryComponent } from './master/category/category.component';
import { AddcategoryComponent } from './master/category/addcategory/addcategory.component';
import { EditcategoryComponent } from './master/category/editcategory/editcategory.component';
import { BrandComponent } from './master/brand/brand.component';
import { AddbrandComponent } from './master/brand/addbrand/addbrand.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    ItemmasterComponent,
    AdditemmasterComponent,
    EdititemmasterComponent,
    CostComponent,
    PriceComponent,
    PackComponent,
    AddpackingComponent,
    MiscellaneousComponent,
    ImageComponent,
    DescriptionComponent,
    EditpackingComponent,
    DepartmentComponent,
    SidebarComponent,
    AdddepartmentComponent,
    EditdepartmentComponent,
    CategoryComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    BrandComponent,
    AddbrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

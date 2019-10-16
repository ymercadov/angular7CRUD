import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**/
import { ProductsComponent} from './products/products.component';
import { ProductAddComponent } from './product-add/product-add.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'Lista de productos'}
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: {title: 'Add Product'}
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

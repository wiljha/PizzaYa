import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
{path: '', component: ProductListComponent},
 {path: 'create', component: CreateProductComponent},
 {path: 'edit/:productoId', component: CreateProductComponent},
 {path: 'login', component: LoginComponent},
 {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {WishlistPageComponent} from './pages/wishlist-page/wishlist-page.component';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {LayoutComponent} from './shared/layout/layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:
      [
        {path: '', component: ProductsPageComponent},
        {path: 'wishlist', component: WishlistPageComponent},
        {path: 'cart', component: CartPageComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

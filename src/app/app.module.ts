import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { CartInfoComponent } from './components/cart-info/cart-info.component';
import { CartInfoComponent as CartInfoContainerComponent } from './containers/cart-info/cart-info.container';
import { WishlistInfoComponent } from './components/wishlist-info/wishlist-info.component';
import { WishlistInfoComponent as WishlistInfoContainerComponent } from './containers/wishlist-info/wishlist-info.container';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-db-service.service';
import { WishlistItemComponent } from './components/wishlist-item/wishlist-item.component';
import { MatListModule } from '@angular/material/list';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WishlistEffects } from './store/effects/wishlist.effects';
import { CartEffects } from './store/effects/cart.effects';
import { LastWishesComponent } from './components/last-wishes/last-wishes.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { NgxMaskModule } from 'ngx-mask';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProductsPageComponent,
    WishlistPageComponent,
    CartPageComponent,
    NavbarComponent,
    CartModalComponent,
    CartInfoContainerComponent,
    CartInfoComponent,
    WishlistInfoContainerComponent,
    WishlistInfoComponent,
    ProductItemComponent,
    WishlistItemComponent,
    CartItemComponent,
    LastWishesComponent,
    CartFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    MatListModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ProductsEffects, WishlistEffects, CartEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

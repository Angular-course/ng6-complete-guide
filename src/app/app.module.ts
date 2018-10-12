import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RecipeService} from './recipes/recipe.service';
import {AppRoutingModule} from './app-routing.module';
import {DataStorageService} from './shared/data-storage.service';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {SharedModule} from './shared/modules/shared.module';
import {AuthModule} from './auth/modules/auth/auth.module';
import {ShoppingListModule} from './shopping-list/modules/shopping-list/shopping-list.module';
import { HomeComponent } from './home/home.component';
import {LazyAuthGuardService} from './auth/lazy-auth-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        ShoppingListModule
    ],
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService, LazyAuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

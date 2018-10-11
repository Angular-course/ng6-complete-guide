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
import {RecipesModule} from './recipes/modules/recipes/recipes.module';
import {SharedModule} from './shared/modules/shared.module';
import {AuthModule} from './auth/modules/auth/auth.module';
import {ShoppingListModule} from './shopping-list/modules/shopping-list/shopping-list.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        RecipesModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        ShoppingListModule
    ],
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

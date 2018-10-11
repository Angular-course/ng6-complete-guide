import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RecipeService} from './recipes/recipe.service';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataStorageService} from './shared/data-storage.service';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {RecipesModule} from './recipes/modules/recipes/recipes.module';
import {SharedModule} from './shared/modules/shared.module';
import {AuthModule} from './auth/modules/auth/auth.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        RecipesModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

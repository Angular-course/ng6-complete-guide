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
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {RecipesModule} from './recipes/modules/recipes/recipes.module';
import {SharedModule} from './shared/modules/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
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

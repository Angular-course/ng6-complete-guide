import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/modules/shared.module';
import {AuthModule} from './auth/modules/auth/auth.module';
import {ShoppingListModule} from './shopping-list/modules/shopping-list/shopping-list.module';
import {CoreModule} from './core/modules/core/core.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        ShoppingListModule,
        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

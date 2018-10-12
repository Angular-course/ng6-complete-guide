import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/modules/shared.module';
import {AuthModule} from './auth/modules/auth/auth.module';
import {ShoppingListModule} from './shopping-list/modules/shopping-list/shopping-list.module';
import {CoreModule} from './core/modules/core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        ShoppingListModule,
        CoreModule,
        AngularFontAwesomeModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

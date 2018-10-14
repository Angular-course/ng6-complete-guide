import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {SharedModule} from '../../../shared/modules/shared.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {HeaderComponent} from '../../header/header.component';
import {HomeComponent} from '../../home/home.component';
import {DataStorageService} from '../../../shared/data-storage.service';
import {RecipeService} from '../../../recipes/recipe.service';
import {LazyAuthGuardService} from '../../../auth/lazy-auth-guard.service';
import {AuthGuardService} from '../../../auth/auth-guard.service';
import {AuthService} from '../../../auth/auth.service';
import {ShoppingListService} from '../../../shopping-list/shopping-list.service';
import {AuthInterceptor} from '../../../shared/auth.interceptor';
import {LoggingInterceptor} from '../../../shared/logging.interceptor';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
        AuthGuardService,
        LazyAuthGuardService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
    ]
})
export class CoreModule {
}

import {NgModule} from '@angular/core';

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
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService, LazyAuthGuardService],
})
export class CoreModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './home/home.component';
import {LazyAuthGuardService} from './auth/lazy-auth-guard.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'recipes', loadChildren: './recipes/modules/recipes/recipes.module#RecipesModule', canLoad: [LazyAuthGuardService]},
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

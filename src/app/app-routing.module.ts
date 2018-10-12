import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';
import {LazyAuthGuardService} from './auth/lazy-auth-guard.service';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'recipes', loadChildren: './recipes/modules/recipes/recipes.module#RecipesModule', canLoad: [LazyAuthGuardService]},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

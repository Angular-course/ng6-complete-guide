import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {map} from 'rxjs/internal/operators';

import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService) {
    }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-3eee1.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://ng-recipe-book-3eee1.firebaseio.com/recipes.json?auth=' + token).pipe(map(
            (response: any) => {
                const recipes: Recipe[] = response;
                for (const recipe of recipes) {
                    if (!recipes['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )).subscribe(
            (recipes: any) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {map} from 'rxjs/internal/operators';

import {Recipe} from '../recipes/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient,
                private recipeService: RecipeService) {
    }

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-3eee1.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get<Recipe[]>('https://ng-recipe-book-3eee1.firebaseio.com/recipes.json').pipe(map(
            (response) => {
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

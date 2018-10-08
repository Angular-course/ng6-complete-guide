import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';

import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/internal/operators';
import {Ingredient} from './ingredient.model';

const recipeUrl = 'https://ng-recipe-book-3eee1.firebaseio.com/recipes.json';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) {
    }

    storeRecipes() {
        return this.http.put(recipeUrl, this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get(recipeUrl).pipe(map(
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

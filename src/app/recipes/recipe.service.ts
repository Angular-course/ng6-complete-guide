import {EventEmitter} from '@angular/core';

import {Recipe} from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'This is simply a test',
            'http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg'),
        new Recipe('Another Test Recipe',
            'This is simply a test',
            'http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}

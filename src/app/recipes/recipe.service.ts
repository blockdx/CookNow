import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            "Tasty Schnitzel",
            "A super-tasty Schnitzel -- Just great!",
            "https://toriavey.com/images/2011/02/IMG_1544.jpg",
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            "Big Fat Burger",
            "What else could it be?",
            "https://cdn.vox-cdn.com/thumbor/3lta23tKnKj-RqlFER_YSKl3VY4=/0x87:500x462/1200x900/filters:focal(0x87:500x462)/cdn.vox-cdn.com/uploads/chorus_image/image/53382189/1512822_793690010647943_107488435_n.0.0.jpg",
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];
    
    constructor(private slService: ShoppingListService) {}
    
    getRecipes() {
        return this.recipes.slice(); //only get a copy instead of passing the reference
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    
}
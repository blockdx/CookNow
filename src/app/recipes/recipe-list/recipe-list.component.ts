import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe","This is simply a test","https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Pindi-chana-recipe.jpg/800px-Pindi-chana-recipe.jpg"),
    new Recipe("Test Recipe","This is simply a test","https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Pindi-chana-recipe.jpg/800px-Pindi-chana-recipe.jpg")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

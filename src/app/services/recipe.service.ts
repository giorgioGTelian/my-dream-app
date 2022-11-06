import { Injectable } from '@angular/core';
import { IIngredient } from '../interfaces/ingredient';
import * as RecipeData from '../../data.json';
import { IRecipe } from "../interfaces/recipe";
import * as _ from 'lodash';
import { Recipe } from '../classes/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe [] = [];

  constructor() { 
    (<any>RecipeData).recipes.forEach( recipe => {
      this.recipes.push( new Recipe(recipe));
    });
  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }
}

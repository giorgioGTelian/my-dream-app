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
    (<any>RecipeData).recipe.forEach( recipe => {
      this.recipes.push( new Recipe(recipe));
    });
  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public getRecipeByI(id:number): Recipe {
    return _.find(this.recipes, (recipe) => recipe.id === id);
  }

  // public createRecipe(id: any, title: any, description: any, serves: any, imageURL: any, ingredients: any, instructions: any)
  // {
  //   const newRecipeData = {
  //     title,
  //     description,
  //     serves,
  //     imageURL,
  //     ingredients,
  //     instructions
  //   }

  //   const newRecipe = new Recipe(newRecipeData);

  //   this.recipes.push(newRecipe);
  //   return newRecipe;
  // }

  public updateRecipe(recipe: Recipe): Recipe {
    const recipeIndex = _.findIndex(this.recipes, (r) => r.id === recipe.id);
    this.recipes[recipeIndex] = recipe;
    return recipe;
  }

  public deleteRecipe(id: number): void {
    const recipeIndex = _.findIndex(this.recipes, (r) => r.id === id);

    if (recipeIndex !== -1) {
      this.recipes.splice(recipeIndex, 1);
    }
  }

  private getNextId(): number {
    const max = _.maxBy( this.recipes, (recipe) => recipe.id);
    return max.id + 1;
    //return this.recipes.length +1;
  }

}

import { IIngredient } from "../interfaces/ingredient";
import { IRecipe } from "../interfaces/recipe";

export class Recipe implements IRecipe{
    id: any;
    title: any;
    description: any;
    serves: any;
    imageUrl: any;
    ingredients: any;
    instructions: any;

    constructor ({id, title, description, serves, imageUrl, ingredients, instructions}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.serves = serves;
        this. imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
    servers!: any;
    instruction: any;
}

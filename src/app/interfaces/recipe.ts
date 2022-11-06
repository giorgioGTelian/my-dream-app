import { IIngredient } from "./ingredient";

export interface IRecipe {
id: number;
title: string;
description: string;
servers: string;
imageUrl: string;
ingredients: IIngredient[];
instructions: string[];
}


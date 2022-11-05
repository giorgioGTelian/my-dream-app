import { Ingredient } from "./ingredient";

export interface IRecipe {
id: number;
title: string;
description: string;
servers: string;
imageUrl: string;
ingredients: Ingredient[];
instruction: string[];
}


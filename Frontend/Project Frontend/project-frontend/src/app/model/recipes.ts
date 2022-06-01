import { Ingredient } from "./ingredients";
import { Step } from "./steps";

export interface Recipe {
    Id: number;
    title: string;
    imageUrl: string;
    duration:number;
    dificulty:string;
    ingredients?: Ingredient[];
    steps?: Step[];
    
  }
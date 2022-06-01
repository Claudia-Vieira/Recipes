import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/model/recipes';
import { IngredientService } from 'src/app/services/ingredient.service';
import { StepService } from 'src/app/services/step.service'; 

@Component({
  selector: 'app-recipe-description',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.css']
})
export class RecipeDescriptionComponent implements OnInit {

  public recipe?: Recipe
  public id?: number;
  public ingredients: any;
  public steps: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private ingredientService:IngredientService, private stepService:StepService) {

    
    }
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipeById(this.id).subscribe(recipe => {
      this.recipe = recipe;
    });
   
    this.ingredientService.getIngredients().subscribe(result => {
      this.ingredients = result;
    },);

    this.stepService.getSteps().subscribe(result => {
      this.steps = result;
    },);
   
  }
  
public faClock = faClock;
public faTachometerAlt = faTachometerAlt;
 
}
 




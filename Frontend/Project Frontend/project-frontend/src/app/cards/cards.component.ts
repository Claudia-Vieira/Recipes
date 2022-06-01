import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../model/recipes';
import { RecipeService } from '../services/recipe.service';
import { IngredientService } from '../services/ingredient.service';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
 
  public faTrashAlt = faTrashAlt;
  public recipes: any;
  public ingredients: any;
  public id?: number;
 

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) {
   
    this.recipeService.getRecipes().subscribe(result => {
      this.recipes = result;
    },);
  }

  navigateToDescription(Id:number) {

     this.router.navigate(['/recipe-description',Id]);

  }

  deleteRecipeById (id:number) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.deleteRecipeById(id).subscribe(result => {
      this.recipes = result;
      ;
    },);
    this.router.navigate(['./receitas']);
    window.location.reload();
    
}
 

}

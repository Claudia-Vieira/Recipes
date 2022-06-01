import { Component, OnInit } from '@angular/core';
import {  FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

    recipeForm: FormGroup;
    ingredientForm?: FormGroup;
    stepsForm?: FormGroup
    Id?: number;
  

    get title() { return this.recipeForm.get('title'); }    
    get dificulty() { return this.recipeForm.get('dificulty'); }  
    get duration() { return this.recipeForm.get('duration'); }
    get steps(){ return this.recipeForm.controls['steps'] as FormArray}
    get ingredients() { return this.recipeForm.controls['ingredients'] as FormArray;}
    get imageUrl() {return this.recipeForm.get('/assets/imageUrl')}
    get name() {return this.ingredientForm?.get('name')}
    get quantity() {return this.ingredientForm?.get('quantity')}
    get descriptio(){return this.stepsForm?.get('description')}
      
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,private recipeService: RecipeService, private ingredientService: IngredientService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {  
      this.Id = this._avRoute.snapshot.params["id"];  
  }  

  this.recipeForm = this._fb.group({  
      title: ['', [Validators.required]],  
      duration: ['', [Validators.required]],  
      dificulty: ['', [Validators.required]], 
      imageUrl: ['', [Validators.required]],
      ingredients: this._fb.array([]),
      steps: this._fb.array([]),
  })  
  }
 
  /* Introdução das funções para os ingredientes e para os passos - falta a passagem da informação introduzida em seguida para o array ingredientes e steps do recipeForm */

  addNewIngredient() {

    const ingredientForm = this._fb.group({
      name: ['', Validators.required],
      quantity:['', Validators.required],
  });
  
    this.ingredients.push(ingredientForm)    
    }

    
  deleteIngredient(ingredientIndex: number) {
    this.ingredients.removeAt(ingredientIndex);
}

addNewStep() {

  const stepForm = this._fb.group({
    description: ['', Validators.required],
});

  this.steps.push(stepForm)    
  }
  
deleteStep(stepIndex: number) {
  this.steps.removeAt(stepIndex);
}

  ngOnInit(): void {
              
  }

  /* Submit form */

 save(){

  this.recipeService.addRecipe(this.recipeForm.value)
  .subscribe((data) => {  
      this._router.navigate(['receitas']);  
  }); 
}

cancel() {  
  this._router.navigate(['receitas']);  
} 

  
}

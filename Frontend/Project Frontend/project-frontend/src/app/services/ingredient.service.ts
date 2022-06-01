import { Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../model/ingredients';
import { Recipe } from '../model/recipes';


@Injectable()
export class IngredientService {

  private baseUrl = 'https://localhost:44380/';

  constructor(private http: HttpClient,) {
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.baseUrl + 'api/ingredients');
  }

  getIngredientById(Id:number): Observable<Ingredient>{
    return this.http.get<Ingredient>(this.baseUrl + `api/ingredients/${Id}`)
  }

  /* addNewIngredient(ingredient:any):Observable<Ingredient[]>{
    
    return this.http.post<Ingredient[]>(this.baseUrl + 'api/ingredients', ingredient)

} */
}

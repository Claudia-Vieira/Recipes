import { Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Step } from '../model/steps';


@Injectable()
export class StepService {

  private baseUrl = 'https://localhost:44380/';

  constructor(private http: HttpClient,) {
  }

  getSteps(): Observable<Step[]> {
    return this.http.get<Step[]>(this.baseUrl + 'api/steps');
  }

  getSteptById(Id:number): Observable<Step>{
    return this.http.get<Step>(this.baseUrl + `api/steps/${Id}`)
  }
}

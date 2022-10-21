import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    public httpClient: HttpClient,
  ) { }

  getSearch(params: string): Observable<any> {
    const url = 'http://localhost:3000/Product?q=' + params;
    return this.httpClient.get(url);
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LvService {

  constructor(
    public httpClient: HttpClient,
  ) { }

  getProduct(): Observable<any> {
    const url = 'http://localhost:3000/Product?brandID=2';
    return this.httpClient.get(url);
  }
  
}

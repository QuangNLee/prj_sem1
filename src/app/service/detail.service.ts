import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(
    public httpClient: HttpClient,
  ) { }

  getDetail(params: string): Observable<any> {
    const url = 'http://localhost:3000/Product?id=' + params;
    return this.httpClient.get(url);
  }
  
}

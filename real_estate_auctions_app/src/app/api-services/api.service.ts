import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppImage } from '../utils/types/image.interface';
import { query } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private accessKey = 'PKn0SKikVvOfWJ8HythVdupXfby31gdhNST8bU7d8Yc';
  private apiUrl = 'https://api.unsplash.com';

  public data=[];
  private url = 'https://api.unsplash.com/search/photos?client_id=PKn0SKikVvOfWJ8HythVdupXfby31gdhNST8bU7d8Yc&query=';

  constructor(private http: HttpClient) { }


  getRealEstatePhoto(numberOfRealEstates: number): Observable<AppImage[]> {
    const endpoint = '/photos';
    const keywords = 'house apartment real estate property';
    const perPage = numberOfRealEstates;
    const query = 'real estate property';
  
    // return this.http.get<any[]>(`${this.apiUrl}${endpoint}?query=${query}&per_page=${perPage}&client_id=${this.accessKey}`).pipe(
    //   map(response => response.map(item => ({
    //     id: item.id,
    //     url: item.urls?.full,
    //   })))
    // );

    return this.http.get<any[]>(`${this.url + query}&per_page=${perPage}&client_id=${this.accessKey}`).pipe(
      map((response: any) => response.results.map(item => ({  
        id: item.id,
        url: item.urls?.full,
      })))
    );
  }


  getImage(numberOfRealEstates: number): any {
    const query1 = 'real estate property';
    this.http.get(this.url + query1).subscribe(
      (res: any) => {
        this.data = res.results.map(item => ({
          id: item.id,
          url: item.urls.full,
        }));
      }
    );
  
    return this.data;
  }


}

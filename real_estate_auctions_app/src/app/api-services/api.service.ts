import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppImage } from '../utils/types/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private accessKey = 'PKn0SKikVvOfWJ8HythVdupXfby31gdhNST8bU7d8Yc';
  private apiUrl = 'https://api.unsplash.com';

  constructor(private http: HttpClient) { }

  // getRealEstatePhoto(numberOfRealEstates: number): Observable<any> {
  //   const endpoint = '/photos'; // Unsplash endpoint za dohvat slika
  //   const query = 'real estate'; // Pretraga slika sa određenim pojmom
  //   const perPage = numberOfRealEstates; // Broj slika koje želite dohvatiti

  //   return this.http.get(`${this.apiUrl}${endpoint}?query=${query}&per_page=${perPage}&client_id=${this.accessKey}`);
  // }
  // getRealEstatePhoto(numberOfRealEstates: number): Observable<AppImage[]> {
  //   const endpoint = '/photos';
  //   const query = 'real estate';
  //   const perPage = numberOfRealEstates;

  //   return this.http.get<any[]>(`${this.apiUrl}${endpoint}?query=${query}&per_page=${perPage}&client_id=${this.accessKey}`).pipe(
  //     map(response => response.map(item => ({
  //       id: item.id,
  //       url: item.urls?.full,
  //     })))
  //   );
  // }

  getRealEstatePhoto(numberOfRealEstates: number): Observable<AppImage[]> {
    const endpoint = '/photos';
    const keywords = 'house apartment real estate property';
    const perPage = numberOfRealEstates;
  
    return this.http.get<any[]>(`${this.apiUrl}${endpoint}?query=${keywords}&per_page=${perPage}&client_id=${this.accessKey}`).pipe(
      map(response => response.map(item => ({
        id: item.id,
        url: item.urls?.full,
      })))
    );
  }
}

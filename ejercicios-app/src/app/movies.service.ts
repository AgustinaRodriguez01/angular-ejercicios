import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey = '2ff6c6e4'; 
  private baseUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<{Episodes: []}>{
    const url = `${this.baseUrl}?apikey=${this.apiKey}&t=Modern+Family&Season=1`;
    return this.http.get<{Episodes: []}>(url);
  };
}

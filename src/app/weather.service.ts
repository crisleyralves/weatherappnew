import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'SUA_CHAVE_AQUI';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${city}&appid=${this.apiKey}&units=metric`);
  }
}
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  searchWeather() {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe(data => {
        this.weatherData = data;
      });
    }
  }
}
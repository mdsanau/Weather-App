import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = '';
  weather: any = null;
  error = '';
  apiKey = '0040f0c12eedb03900eaa933f655932d'; 

  constructor(private http: HttpClient) {}

  getWeather() {
    this.error = '';
    this.weather = null;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
    
    this.http.get(url).subscribe({
      next: (data) => this.weather = data,
      error: () => this.error = 'Sheher nahi mila! Dobara check karo.'
    });
  }
}
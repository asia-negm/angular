import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ErrorComponent } from './error-component/error-component';
import { AboutComponent } from './about-component/about-component';
import { HomeComponent } from './home-component/home-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Navbar ,ErrorComponent , AboutComponent ,HomeComponent  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('web');
}

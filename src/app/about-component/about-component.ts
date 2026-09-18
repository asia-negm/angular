import { Component } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-about-component',
  imports: [Hero],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent {}

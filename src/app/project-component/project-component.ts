import { Component } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-project-component',
  imports: [  Hero],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css',
})
export class ProjectComponent {}

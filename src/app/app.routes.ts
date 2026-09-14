import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { ProjectComponent } from './project-component/project-component';
import { error } from 'console';
import { ErrorComponent } from './error-component/error-component';

export const routes: Routes = [
    {path:"", redirectTo:'home', pathMatch:"full"},
    {path:'home' , component:HomeComponent , title:'عدسة-عالم التصوير' ,},
    {path:'about' , component:AboutComponent, title:'عدسة-عالم التصوير'  },
    {path:'project' , component:ProjectComponent , title:'عدسة-عالم التصوير'},
    {path:"**" , component:ErrorComponent , title:'عدسة-عالم التصوير'}

];

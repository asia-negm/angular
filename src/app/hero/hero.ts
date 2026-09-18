import { Component , input } from '@angular/core';
import { ICard } from '../icard';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-hero',
  imports: [RouterLink ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  badgeText =input( 'مرحباً بك في عدسة');
  title =input('اكتشف');
  titleHighlight =input('فن');
  titleRest =input('التصوير الفوتوغرافي');
  description =input('انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.');
  showBtn =input(true);
  showCards =input(true);
      cards:ICard[]=[
      {id:'0' ,icon:'fa-solid fa-newspaper' , h2:'+50' ,p:'مقالة'},
      {id:'1' ,icon:'fa-solid fa-users' , h2:'+10ألف' ,p:'قارئ'},
      {id:'2' ,icon:' fa-solid fa-folder-open' , h2:'4' ,p:'تصنيفات'},
      {id:'3' ,icon:' fa-solid fa-pen-nib' , h2:'6' ,p:'كاتب'},
    ]
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ICard } from '../icard';
import { IPost } from '../ipost';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  cards:ICard[]=[
    {id:'0' ,icon:'fa-solid fa-newspaper' , h2:'+50' ,p:'مقالة'},
    {id:'1' ,icon:'fa-solid fa-users' , h2:'+10ألف' ,p:'قارئ'},
    {id:'2' ,icon:' fa-solid fa-folder-open' , h2:'4' ,p:'تصنيفات'},
    {id:'3' ,icon:' fa-solid fa-pen-nib' , h2:'6' ,p:'كاتب'},
  ]
  posts:IPost[]=[
{id:1, sulg:'mastering-golden-hour-photography', title:'إتقان تصوير الساعة الذهبية: دليل شامل' , excerpt:'تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.', content:'الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.\n\n## لماذا الساعة الذهبية؟\n\nالضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.\n\n## التحضير المسبق\n\nخطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.\n\n## إعدادات الكاميرا\n\nاستخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.\n\n## التكوين الفني\n\nضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.\n\n## الخلاصة\n\nالساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.",', author:'إضاءة',image:'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop', date:'2026-01-15',readTime:'دقائق للقراءة 8', featured:true}
  ]
}
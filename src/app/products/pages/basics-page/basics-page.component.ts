import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'juanjo';
  public nameUpper: string = 'JUANJO';
  public fullName: string = 'juAN JoSe MartINez';

  public customDate: Date = new Date();

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'ignacio';
  public nameUpper: string = 'IGNACIO';
  public fullName: string = 'IgNAciO BiLBAo';

  public customDate: Date = new Date();

}

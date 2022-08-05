import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '010822-example';
  showDesc = false;
  catNames = [
    'Kukainis',
    'Zemene',
    'Rūdis',
    'Miks'
  ]
  showDescription(): void{
    this.showDesc = !this.showDesc
  }
}

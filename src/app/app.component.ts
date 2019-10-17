import { SharedService } from './shared/services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SharedService]
})
export class AppComponent {
  title = 'MultyForm';
  public showMenu = true;
  constructor() {}

}

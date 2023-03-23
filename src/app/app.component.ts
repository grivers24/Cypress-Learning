import { Component } from '@angular/core';
import { ResourceOptions } from './interfaces/resources.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'try-cypress';
  selectedOption: ResourceOptions = 'component';
}

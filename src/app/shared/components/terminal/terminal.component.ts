import { Component, Input } from '@angular/core';
import { ResourceOptions } from '../../../interfaces/resources.interface';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent {
  @Input() selectedOption: ResourceOptions = 'component';
}

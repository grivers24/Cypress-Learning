import { Component, EventEmitter, Output } from '@angular/core';
import { ResourceOptions } from '../../../interfaces/resources.interface';

interface IOption {
  value: ResourceOptions;
  title: string;
}

@Component({
  selector: 'app-next-steps',
  templateUrl: './next-steps.component.html',
  styleUrls: ['./next-steps.component.scss'],
})
export class NextStepsComponent {
  @Output() onOptionChange: EventEmitter<ResourceOptions> = new EventEmitter<
    ResourceOptions
  >();

  listOfOptions: IOption[] = [
    {
      value: 'component',
      title: 'New Component',
    },
    {
      value: 'material',
      title: 'Angular Material',
    },
    {
      value: 'pwa',
      title: 'Add PWA Support',
    },
    {
      value: 'dependency',
      title: 'Add Dependency',
    },
    {
      value: 'test',
      title: 'Run and Watch Tests',
    },
    {
      value: 'build',
      title: 'Build for Production',
    },
  ];

  handleOnChange(value: ResourceOptions) {
    this.onOptionChange.emit(value);
  }
}

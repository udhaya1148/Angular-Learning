import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-ng-on-chnage-component',
  imports: [],
  templateUrl: './child-ng-on-chnage-component.html',
  styleUrl: './child-ng-on-chnage-component.css'
})
export class ChildNgOnChnageComponent implements OnChanges {
  @Input() message !: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['message']) {
      console.log('Old:', changes['message'].previousValue);
      console.log('New:', changes['message'].currentValue);
    }

  }

}

import { Component } from '@angular/core';
import { ChildNgOnChnageComponent } from '../child-ng-on-chnage-component/child-ng-on-chnage-component';

@Component({
  selector: 'app-parent-ng-on-chnage-component',
  imports: [ChildNgOnChnageComponent],
  templateUrl: './parent-ng-on-chnage-component.html',
  styleUrl: './parent-ng-on-chnage-component.css'
})
export class ParentNgOnChnageComponent {
  msg ="hello"

}

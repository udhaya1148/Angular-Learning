import { Component } from '@angular/core';
import { ReceivechildSetterinterceptionComponent } from '../receivechild-setterinterception-component/receivechild-setterinterception-component';

@Component({
  selector: 'app-sendparent-setterinterception-component',
  imports: [ReceivechildSetterinterceptionComponent],
  templateUrl: './sendparent-setterinterception-component.html',
  styleUrl: './sendparent-setterinterception-component.css'
})
export class SendparentSetterinterceptionComponent {
  counter = 0;
  inc() {
    this.counter++
}

}

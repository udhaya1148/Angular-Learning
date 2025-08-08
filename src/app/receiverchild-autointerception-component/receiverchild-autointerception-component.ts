import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receiverchild-autointerception-component',
  imports: [],
  templateUrl: './receiverchild-autointerception-component.html',
  styleUrl: './receiverchild-autointerception-component.css'
})
export class ReceiverchildAutointerceptionComponent {

  @Input() message: string ="";
}

import { Component } from '@angular/core';
import { ReceiverchildAutointerceptionComponent } from '../receiverchild-autointerception-component/receiverchild-autointerception-component';

@Component({
  selector: 'app-senderparent-autointerception-component',
  imports: [ReceiverchildAutointerceptionComponent],
  templateUrl: './senderparent-autointerception-component.html',
  styleUrl: './senderparent-autointerception-component.css'
})
export class SenderparentAutointerceptionComponent {
  message = "I am learning Angular";

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextComponent } from './text-component/text-component';
import { ImageComponent } from './image-component/image-component';
import { LifecycleSampleComponent } from './lifecycle-sample-component/lifecycle-sample-component';
import { SenderparentAutointerceptionComponent } from './senderparent-autointerception-component/senderparent-autointerception-component';
import { SendparentSetterinterceptionComponent } from './sendparent-setterinterception-component/sendparent-setterinterception-component';
import { ParentNgOnChnageComponent } from './parent-ng-on-chnage-component/parent-ng-on-chnage-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextComponent, ImageComponent, LifecycleSampleComponent, SenderparentAutointerceptionComponent, SendparentSetterinterceptionComponent, ParentNgOnChnageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice-components');
}

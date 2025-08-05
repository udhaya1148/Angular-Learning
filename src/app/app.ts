import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextComponent } from './text-component/text-component';
import { ImageComponent } from './image-component/image-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TextComponent,ImageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice-components');
}

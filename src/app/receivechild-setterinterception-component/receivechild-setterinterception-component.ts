import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receivechild-setterinterception-component',
  imports: [],
  templateUrl: './receivechild-setterinterception-component.html',
  styleUrl: './receivechild-setterinterception-component.css'
})
export class ReceivechildSetterinterceptionComponent {

  @Input ()
    get counter(): number { return this._counter;}
    set counter(val: number){
      this._counter = val || 0;
      if(val > 25) this._counter =  val % 25
    }
    private _counter : number = 1;
  

}

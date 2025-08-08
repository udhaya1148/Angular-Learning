import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-sample-component',
  imports: [],
  templateUrl: './lifecycle-sample-component.html',
  styleUrl: './lifecycle-sample-component.css'
})
export class LifecycleSampleComponent implements OnChanges, OnInit {
  ngOnChanges() {
    console.log("changes detected")
  }

  ngOnInit(){
    console.log("Initialization of components /directives")
  }

  ngDoCheck(){
    console.log("Custom change detection")
  }

  ngAfterContentChecked(){
    console.log("checking changes in content")
  }

  ngAfterViewInit(){
    console.log("view initialization")
  }

  ngOnDestroy(){
    console.log("Destruction of component/directive")
  }

}

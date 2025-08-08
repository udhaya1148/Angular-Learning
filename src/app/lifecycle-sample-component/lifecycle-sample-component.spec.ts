import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleSampleComponent } from './lifecycle-sample-component';

describe('LifecycleSampleComponent', () => {
  let component: LifecycleSampleComponent;
  let fixture: ComponentFixture<LifecycleSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

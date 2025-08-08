import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgOnChnageComponent } from './child-ng-on-chnage-component';

describe('ChildNgOnChnageComponent', () => {
  let component: ChildNgOnChnageComponent;
  let fixture: ComponentFixture<ChildNgOnChnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildNgOnChnageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildNgOnChnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgOnChnageComponent } from './parent-ng-on-chnage-component';

describe('ParentNgOnChnageComponent', () => {
  let component: ParentNgOnChnageComponent;
  let fixture: ComponentFixture<ParentNgOnChnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentNgOnChnageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentNgOnChnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

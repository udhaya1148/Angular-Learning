import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendparentSetterinterceptionComponent } from './sendparent-setterinterception-component';

describe('SendparentSetterinterceptionComponent', () => {
  let component: SendparentSetterinterceptionComponent;
  let fixture: ComponentFixture<SendparentSetterinterceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendparentSetterinterceptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendparentSetterinterceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

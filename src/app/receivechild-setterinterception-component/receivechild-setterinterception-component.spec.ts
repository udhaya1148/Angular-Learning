import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivechildSetterinterceptionComponent } from './receivechild-setterinterception-component';

describe('ReceivechildSetterinterceptionComponent', () => {
  let component: ReceivechildSetterinterceptionComponent;
  let fixture: ComponentFixture<ReceivechildSetterinterceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivechildSetterinterceptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivechildSetterinterceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

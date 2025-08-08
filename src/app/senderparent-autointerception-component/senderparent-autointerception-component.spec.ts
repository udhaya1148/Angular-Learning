import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderparentAutointerceptionComponent } from './senderparent-autointerception-component';

describe('SenderparentAutointerceptionComponent', () => {
  let component: SenderparentAutointerceptionComponent;
  let fixture: ComponentFixture<SenderparentAutointerceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenderparentAutointerceptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderparentAutointerceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

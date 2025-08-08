import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverchildAutointerceptionComponent } from './receiverchild-autointerception-component';

describe('ReceiverchildAutointerceptionComponent', () => {
  let component: ReceiverchildAutointerceptionComponent;
  let fixture: ComponentFixture<ReceiverchildAutointerceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiverchildAutointerceptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverchildAutointerceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

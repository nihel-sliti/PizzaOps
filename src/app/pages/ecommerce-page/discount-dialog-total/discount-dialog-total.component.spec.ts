import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountDialogTotalComponent } from './discount-dialog-total.component';

describe('DiscountDialogTotalComponent', () => {
  let component: DiscountDialogTotalComponent;
  let fixture: ComponentFixture<DiscountDialogTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountDialogTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountDialogTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

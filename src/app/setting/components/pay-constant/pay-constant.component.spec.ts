import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayConstantComponent } from './pay-constant.component';

describe('PayConstantComponent', () => {
  let component: PayConstantComponent;
  let fixture: ComponentFixture<PayConstantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayConstantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayConstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoveComponent } from './modal-remove.component';

describe('ModalRemoveComponent', () => {
  let component: ModalRemoveComponent;
  let fixture: ComponentFixture<ModalRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

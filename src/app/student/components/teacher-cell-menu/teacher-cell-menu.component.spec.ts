import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCellMenuComponent } from './teacher-cell-menu.component';

describe('TeacherCellMenuComponent', () => {
  let component: TeacherCellMenuComponent;
  let fixture: ComponentFixture<TeacherCellMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCellMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCellMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

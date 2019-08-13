import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-teacher-cell-menu',
  templateUrl: './teacher-cell-menu.component.html',
  styleUrls: ['./teacher-cell-menu.component.scss']
})
export class TeacherCellMenuComponent implements OnInit {
  @Output() showStudents = new EventEmitter();

  public items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Show students',
        command: (): void => {
          this.showStudents.emit();
      }
      }
    ];
  }

}

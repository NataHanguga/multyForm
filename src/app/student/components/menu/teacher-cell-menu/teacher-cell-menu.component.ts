import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Student } from 'src/app/student/models/student';

@Component({
  selector: 'app-teacher-cell-menu',
  templateUrl: './teacher-cell-menu.component.html',
  styleUrls: ['./teacher-cell-menu.component.scss']
})
export class TeacherCellMenuComponent implements OnInit {
  @Input() teacherName: string;
  @Output() students = new EventEmitter();
  @Output() removeTeacher = new EventEmitter();
  @Output() editTeacherName = new EventEmitter<string>();
  @Output() addNewStudent = new EventEmitter<Student>();

  public items: MenuItem[];
  public displayRemove = false;
  public displayEdit = false;
  public displayAdd = false;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Show students',
        command: (): void => {
          this.students.emit();
        }
      },
      {
        label: 'Delete teacher',
        command: (event): void => {
          this.displayRemove = true;
        }
      },
      {
        label: 'Edit teacher',
        command: (event): void => {
          this.displayEdit = true;
        }
      },
      {
        label: 'Add new student',
        command: (event): void => {
          this.displayAdd = true;
        }
      }
    ];
  }

  public deleteTeacher(event) {
    this.displayRemove = false;
    this.removeTeacher.emit();
  }

  public editTeacher(event) {
    this.displayEdit = false;
    this.editTeacherName.emit(event);
  }

  public addStudent(event) {
    this.displayAdd = false;
    this.addNewStudent.emit(event);
  }

}

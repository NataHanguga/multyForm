import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Student } from 'src/app/student/models/Student';

@Component({
  selector: 'app-teacher-cell-menu',
  templateUrl: './teacher-cell-menu.component.html',
  styleUrls: ['./teacher-cell-menu.component.scss']
})
export class TeacherCellMenuComponent implements OnInit {
  @Input() teacherName: string;
  @Output() Students = new EventEmitter();
  @Output() removeTeacher = new EventEmitter();
  @Output() editTeacherName = new EventEmitter<string>();
  @Output() addNewStudent = new EventEmitter<Student>();
  public items: MenuItem[];
  public displayRemove = false;
  public displayEdit = false;
  public displayAdd = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Show students',
        command: (): void => {
          this.Students.emit();
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
    console.log(event);
  }

  public editTeacher(event) {
    this.displayEdit = false;
    this.editTeacherName.emit(event);
    console.log(event);
  }

  public addStudent(event) {
    this.displayAdd = false;
    this.addNewStudent.emit(event);
    console.log(event);

  }

}

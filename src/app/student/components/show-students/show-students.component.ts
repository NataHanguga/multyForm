import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Teacher } from '../../models/teacher';
import { FormGroup } from '@angular/forms';
import { PayArray } from '../../models/payArray';
import { SelectItem } from 'primeng/api';
import { ShowStudent } from '../../models/showStudent';
import { StudentRowComponent } from '../student-row/student-row.component';

@Component({
	selector: 'app-show-students',
	templateUrl: './show-students.component.html',
	styleUrls: [ './show-students.component.scss' ]
})
export class ShowStudentsComponent implements OnInit {
  @ViewChild('studentList', {static: false}) studentList: StudentRowComponent;
	public teacherList: Teacher[];

	constructor(private studentService: StudentService) {}

	ngOnInit() {
		this.teacherList = this.studentService.getStudentsFromLocalSrotage();
		// console.log(this.teacherList);
	}

  public getStudents(event: string) {
    console.log(event);
    this.studentList.getStudents(event);
  }

  changeSearch(data: string) {
    // console.log(data, typeof data);
    // let list: Teacher[] = this.teacherList.map((teacher: Teacher) => {
    //   return new Teacher(teacher.teacherName, teacher.student.filter((student: ShowStudent) => {
    //     return student.fullName.toLocaleLowerCase().includes(data);
    //   }));
    // });

    // if (!data.length) {
    //   list = this.teacherList;
    // }

    // console.log(list);
    // this.teacherList = list;

  }

  changeList(event: Teacher[]) {
	  console.log(event);
	  this.teacherList = event;
  }
}

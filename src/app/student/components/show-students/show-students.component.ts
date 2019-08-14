import { Component, OnInit, ViewChild } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { StudentRowComponent } from '../student-row/student-row.component';
import { HttpService } from '../../services/http.service';

@Component({
	selector: 'app-show-students',
	templateUrl: './show-students.component.html',
	styleUrls: [ './show-students.component.scss' ]
})
export class StudentsComponent implements OnInit {
    @ViewChild('studentList', {static: false}) studentList: StudentRowComponent;
        public teacherList: Teacher[];

        constructor(private httpService: HttpService) {}

    ngOnInit() {
        this.getTeacherList(true);
    }

    public getTeacherList(event) {
        this.httpService.getTeachers().subscribe((data: Teacher[]) => {
            this.teacherList = data;
        });
    }

    public changeList(event: any): void {
        this.teacherList = event;
    }

    public getStudents(event: string): void {
        this.studentList.getStudents(event);
        this.studentList.name = event;
    }
}

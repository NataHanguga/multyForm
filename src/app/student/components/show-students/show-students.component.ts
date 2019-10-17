import { SharedService } from './../../../shared/services/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { StudentRowComponent } from '../student-row/student-row.component';
import { HttpService } from '../../services/http.service';
import { TeacherCellComponent } from '../teacher-cell/teacher-cell.component';

@Component({
	selector: 'app-show-students',
	templateUrl: './show-students.component.html',
    styleUrls: [ './show-students.component.scss' ],
    providers: [HttpService]
})
export class StudentsComponent implements OnInit {
    @ViewChild('studentList', {static: false}) studentList: StudentRowComponent;
    @ViewChild('teachers', {static: false}) teachers: TeacherCellComponent;

    public teacherList: Teacher[];

    constructor(private httpService: HttpService, private sharedService: SharedService) {}

    ngOnInit(): void {
        this.getTeacherList(true);
    }

    public getTeacherList(event): void {
        this.httpService.getTeachers().subscribe((data: Teacher[]) => {
            this.teacherList = data;
            this.sharedService.addSuccessMessage('Teachers and students is loaded');
        },
        (error) => {
            this.sharedService.addErrorMessage(error.message);
        });
    }

    public changeList(event: any): void {
        this.teacherList = event;
        this.getTeacherList(true);
    }

    public getStudents(event: string): void {
        this.studentList.getStudents(event);
    }
}

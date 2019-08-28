import { Component, Input, Output, EventEmitter } from '@angular/core';

import { HttpService } from '../../services/http.service';

import { Teacher } from '../../models/teacher';
import { Student } from '../../models/student';

@Component({
    selector: 'app-teacher-cell',
    templateUrl: './teacher-cell.component.html',
    styleUrls: ['./teacher-cell.component.scss'],
    providers: [HttpService]
})
export class TeacherCellComponent {
    @Input() teachers: Teacher[];
    @Output() name: EventEmitter<string> = new EventEmitter<string>();
    @Output() created = new EventEmitter();

    public teacherList: Teacher[];
    constructor(private httpService: HttpService) { }

    public deleteTeacher(id: string): void {
        this.httpService
            .deleteTeacher(id)
            .subscribe((data: Teacher[]) => {
                this.created.emit();
            });
    }

    public saveEditName(id: string, newName: string): void {
        this.httpService
            .editTeacherName(id, newName)
            .subscribe((data: any) => {
                this.created.emit();
            });
    }

    public saveNewTeacher(event: string): void {
        this.httpService
            .createTeacher(event)
            .subscribe((data: Teacher[]) => {
                this.teacherList = data;
                this.created.emit(this.teacherList);
            });
    }

    public addNewStudent(id: string, student: Student): void {
        const newStudent: Student = {
            fullName: student.fullName,
            startDate: student.startDate,
            pay: 0,
            classNumber: student.classNumber,
            studentType: student.studentType,
            id: student.id
          };
        this.httpService
            .addStudentToTeacher(id, newStudent)
            .subscribe((data: Teacher[]) => {
                this.created.emit(this.teacherList);
                this.name.emit(id);
            });
    }

    public showTeacherChildren(id: string): void {
        this.name.emit(id);
    }

}

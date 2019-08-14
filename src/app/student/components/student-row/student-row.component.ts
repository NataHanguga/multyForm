import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/Student';
import { Teacher } from '../../models/teacher';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-student-row',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss'],
  providers: [HttpService]
})
export class StudentRowComponent {
    @Input() teacher: Teacher;
    @Output() list = new EventEmitter<Teacher[]>();
    @Output() editStudents: EventEmitter<string> = new EventEmitter<string>();

    public name = '';
    public studentList: Student[] = [];

    constructor(private httpService: HttpService) { }

    public getStudents(name: string): void {
        this.name = name;
        this.httpService
            .getStudentsByTeacherId(name)
            .subscribe((data: Student[]) => {
                this.studentList = data;
            });
    }

    public editStudent(event: Student): void {
        this.httpService
            .editStudent(this.name, event)
            .subscribe((data: Student[]) => {
                this.studentList = data;
                this.list.emit();
            });
    }

    public deleteStudent(id: string): void {
        this.httpService
            .deleteStudent(this.name, id)
            .subscribe((data: Student[]) => {
                this.studentList = data;
                this.list.emit();
            });
    }
}

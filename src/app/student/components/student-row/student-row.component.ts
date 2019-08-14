import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/Student';
import { Teacher } from '../../models/teacher';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-student-row',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss']
})
export class StudentRowComponent {
    @Input() teacher: Teacher;
    @Output() list = new EventEmitter<Teacher[]>();
    @Output() editStudents: EventEmitter<string> = new EventEmitter<string>();

    public name = '';
    public studentList: Student[] = [];

    constructor(private httpService: HttpService) { }

    getStudents(name: string) {
        this.name = name;
        this.httpService.getStudentsByTeacherId(name).subscribe((data: Student[]) => {
            console.log(data);
            this.studentList = data;
        });
    }

    editStudent(event) {
        console.log(event, this.name, event.id);
        this.httpService.editStudent(this.name, event).subscribe((data: Student[]) => {
            console.log(data);
            this.studentList = data;
        });
    }

    deleteStudent(id: string) {
        this.httpService.deleteStudent(this.name, id).subscribe((data: Student[]) => {
            console.log(data);
            this.studentList = data;
            this.list.emit();
        });
    }
}

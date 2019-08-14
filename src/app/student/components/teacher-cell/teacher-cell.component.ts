import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { StudentService } from '../../services/student.service';
import { FormGroup } from '@angular/forms';
import { Student } from '../../models/Student';
import { SelectItem } from 'primeng/api';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-teacher-cell',
    templateUrl: './teacher-cell.component.html',
    styleUrls: ['./teacher-cell.component.scss']
})
export class TeacherCellComponent implements OnInit {
    @Input() teachers: Teacher[];
    @Output() name: EventEmitter<string> = new EventEmitter<string>();
    @Output() created = new EventEmitter();

    public teacherList: Teacher[];
    public teacherItem = '';
    public student: FormGroup = this.studentService.initialSubject();
    public displayAdd = false;
    public display = false;
    public displayRemove = false;
    public editTeacherItem: Teacher;
    private selectedStudentType = '';
    public types: SelectItem[] = [
        { label: 'Contract', value: 'contract' },
        { label: 'Beneficiary', value: 'beneficiary' }
    ];
    public payed = [0, 0];
    constructor(private studentService: StudentService, private httpService: HttpService) { }

    ngOnInit() {
    }

    public deleteTeacher(id: string) {
        this.httpService.deleteTeacher(id).subscribe((data: Teacher[]) => {
            this.created.emit();
        });
    }

    saveEditName(id: string, newName: string): void {
        this.httpService.editTeacherName(id, newName).subscribe((data: any) => {
            this.created.emit();
        });
    }

    saveNewTeacher(event: string) {
        this.httpService.createTeacher(event).subscribe((data: Teacher[]) => {
            this.teacherList = data;
            this.created.emit(this.teacherList);
        });
    }

    addNewStudent(id: string, student: Student) {
        console.log(id, student);
        this.httpService.addStudentToTeacher(id, student).subscribe((data: Teacher[]) => {
            console.log(data);
            // this.teacherList = data;
            this.created.emit(this.teacherList);
        });
    }

    public showTeacherChildren(name: string) {
        this.name.emit(name);
    }

}

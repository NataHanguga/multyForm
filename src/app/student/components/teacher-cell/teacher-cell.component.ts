import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { StudentService } from '../../services/student.service';
import { FormGroup } from '@angular/forms';
import { ShowStudent } from '../../models/showStudent';
import { SelectItem } from 'primeng/api';
import { HttpService } from '../../services/http.service';
import { Student } from '../../models/student';

@Component({
    selector: 'app-teacher-cell',
    templateUrl: './teacher-cell.component.html',
    styleUrls: ['./teacher-cell.component.scss']
})
export class TeacherCellComponent implements OnInit {
    @Input() teachers: Teacher[];
    @Output() list: EventEmitter<Teacher[]> = new EventEmitter<Teacher[]>();
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

    // public getPayed(teacher: Teacher) {
    //     if (teacher.students.length) {
    //         teacher.students.forEach((student: ShowStudent) => {
    //             (student.payed) ? this.payed[0]++ : this.payed[0]++;
    //         });
    //         console.log(222)
    //     }

    //     return this.payed;
    // }
    public deleteTeacher(event, id: string) {
        this.httpService.deleteTeacher(id).subscribe((data: Teacher[]) => {
            this.created.emit();
        });
    }

    editTeacher(teacherEdit: Teacher) {
        this.display = true;
        this.editTeacherItem = teacherEdit;
        this.teacherItem = teacherEdit.name; // editeble teacher name
    }

    saveEditName(): void {
        console.log(this.teacherItem);
        this.httpService.editTeacherName(this.editTeacherItem._id, this.teacherItem).subscribe((data: any) => {
            this.created.emit();
            this.display = false;
        });
    }

    saveNewTeacher(event: string) {
        this.httpService.createTeacher(event).subscribe((data: Teacher[]) => {
            console.log(data);
            this.teacherList = data;
            this.created.emit(this.teacherList);
        });
    }

    saveNewStudent(data: ShowStudent) {
        console.log(data, new ShowStudent(
            data.fullName,
            data.classNumber,
            this.selectedStudentType,
            data.startDate,
            0
        ));
        this.displayAdd = false;
        this.studentService.addNewStudent(
            this.teacherItem,
            new ShowStudent(
                data.fullName,
                data.classNumber,
                this.selectedStudentType,
                data.startDate,
                0
            )
        );
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.list.emit(this.teacherList);
    }

    public showTeacherChildren(name: string) {
        this.name.emit(name);
    }

    public changeStudentType(value): void {
        this.selectedStudentType = (value === null) ?
            this.types[0].value : value;
    }

}

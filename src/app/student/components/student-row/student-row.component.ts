import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowStudent } from '../../models/showStudent';
import { Teacher } from '../../models/teacher';
import { StudentService } from '../../services/student.service';
import { FormGroup } from '@angular/forms';
import { ProgressService } from '../../services/progress.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-student-row',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss']
})
export class StudentRowComponent implements OnInit {
    @Input() teacher: Teacher;
    @Output() list = new EventEmitter<Teacher[]>();
    @Output() editStudents: EventEmitter<string> = new EventEmitter<string>();

    private readonly PAY: number = 50;
    public display = false;
    public displayEdit = false;
    public teacherItem = '';
    public name = '';
    public studentItem: ShowStudent;
    public studentList: ShowStudent[] = [];
    public student: FormGroup = this.studentService.initialSubject();
    public teacherList: Teacher[];
    public pay: FormGroup = this.studentService.pay;
    public monthArr = ['Sep', 'Oct', 'Nov', 'Des', 'Feb', 'Mar', 'Apr', 'May'];
    public arr: Array<number>;
    public fullName = '';
    public classNumber = 0;
    public date: Date;
    public months = [
        {label: 'September', value: 'Sep'},
        {label: 'October', value: 'Oct'},
        {label: 'November', value: 'Nov'},
        {label: 'Desember', value: 'Des'},
        {label: 'February', value: 'Feb'},
        {label: 'March', value: 'Mar'},
        {label: 'April', value: 'Apr'},
        {label: 'May', value: 'May'}
    ];
    constructor(
        private httpService: HttpService,
        private studentService: StudentService) { }

    ngOnInit() {
    }
    dropdown(data) {
        console.log(this.fullName);
        this.studentList.forEach((student: ShowStudent) => {
           console.log(new Date(student.startDate).getUTCMonth());
        });
    }

    getStudents(name: string) {
        this.name = name;
        this.httpService.getStudentsByTeacherId(name).subscribe((data: ShowStudent[]) => {
            console.log(data);
            this.studentList = data;
        });
    }

    editStudent(student: ShowStudent) {
        console.log(student);
        this.displayEdit = true;
        this.studentItem = student;
        this.fullName = this.studentItem.fullName;
        this.classNumber = this.studentItem.classNumber;
        this.date = this.studentItem.startDate;
    }

    saveEditStudent() {
        console.log(this.fullName, this.classNumber, this.date);
        const editStudent: ShowStudent =
        new ShowStudent(
            this.fullName,
            this.classNumber,
            this.studentItem.studentType,
            this.date,
            this.studentItem.payArray);

        editStudent._id = this.studentItem._id;
        this.studentService.saveEditStudent(editStudent);
        // this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        // this.list.emit(this.teacherList);
        this.editStudents.emit(this.name);
        this.cancel();
    }

    cancel() {
        this.displayEdit = false;
        this.fullName = null;
        this.classNumber = null;
        this.date = null;
    }

    payNow(data: ShowStudent) {
        this.display = true;
        this.studentItem = data;
    }

    deleteStudent(id: number) {
        this.studentService.deleteStudent(id, this.name);
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.editStudents.emit(this.name);
        // this.list.emit(this.teacherList);
    }

	saveStudentPay(data: string) {
        console.log(data);
        this.studentService.setPayArray(this.studentItem._id, +data, this.studentItem.fullName);
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.editStudents.emit(this.name);
        // this.list.emit(this.teacherList);
        this.display = false;
	}


}

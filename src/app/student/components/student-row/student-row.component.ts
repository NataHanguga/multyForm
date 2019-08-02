import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowStudent } from '../../models/showStudent';
import { Teacher } from '../../models/teacher';
import { StudentService } from '../../services/student.service';
import { FormGroup } from '@angular/forms';

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
    public teacherName: string = '';
    public studentItem: ShowStudent;
    public studentList: ShowStudent[] = [];
    public student: FormGroup = this.studentService.initialSubject();
    public teacherList: Teacher[];
    public pay: FormGroup = this.studentService.pay;
    public monthArr = ['Sep', 'Oct', 'Nov', 'Des', 'Feb', 'Mar', 'Apr', 'May'];
    public fullName = '';
    public classNumber = 0;
    public date: Date;
    
    constructor(private studentService: StudentService) { }

    ngOnInit() {
    }

    // edit(teacher: string, student: Teacher) {
        // 	console.log(teacher, student);
        // 	this.studentService.saveTeacher(teacher, student);
    // }

    getStudents(name: string) {
        this.teacherName = name;
        this.studentList = this.studentService.getStudentsByTeacherName(name);
        console.log(this.studentList);
    }

    public getStudentList() {

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

        editStudent.id = this.studentItem.id;
        this.studentService.saveEditStudent(editStudent);
        // this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        // this.list.emit(this.teacherList);
        this.editStudents.emit(this.teacherName);
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
        this.studentService.deleteStudent(id, this.teacherName);
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.editStudents.emit(this.teacherName);
        // this.list.emit(this.teacherList);
    }

	saveStudentPay(data: string) {
        console.log(data);
        this.studentService.setPayArray(this.studentItem.id, +data, this.studentItem.fullName);
        this.teacherList = this.studentService.getStudentsFromLocalSrotage();
        this.editStudents.emit(this.teacherName);
        // this.list.emit(this.teacherList);
        this.display = false;
	}


}

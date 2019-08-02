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

  private readonly PAY: number = 50;
  public display = false;
  public displayEdit = false;
  public teacherItem = '';
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
    this.studentList = this.studentService.getStudentsByTeacherName(name);
    console.log(this.studentList);
  }

  editStudent(teacher: Teacher, student: ShowStudent) {
    console.log(teacher, student);
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
    this.teacherList = this.studentService.getStudentsFromLocalSrotage();
    this.list.emit(this.teacherList);
    this.cancel();
  }

  cancel() {
    this.displayEdit = false;
    this.fullName = null;
    this.classNumber = null;
    this.date = null;
  }

  payNow(data: ShowStudent, teacher: string) {
    this.display = true;
    this.teacherItem = teacher;
    this.studentItem = data;
		  console.log(data.fullName, teacher);
	}

  deleteStudent(id: number, teacher: string) {
		this.studentService.deleteStudent(id, teacher);
  this.teacherList = this.studentService.getStudentsFromLocalSrotage();
  this.list.emit(this.teacherList);
  }

	save(data: string) {
    console.log(data);
    this.studentService.setPayArray(this.studentItem.id, +data, this.studentItem.fullName);
    this.teacherList = this.studentService.getStudentsFromLocalSrotage();
    this.list.emit(this.teacherList);
    this.display = false;
	}


}

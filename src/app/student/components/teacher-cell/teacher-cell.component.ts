import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { StudentService } from '../../services/student.service';
import { FormGroup } from '@angular/forms';
import { ShowStudent } from '../../models/showStudent';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-teacher-cell',
  templateUrl: './teacher-cell.component.html',
  styleUrls: ['./teacher-cell.component.scss']
})
export class TeacherCellComponent implements OnInit {
  @Input() teacher: Teacher;
  @Output() list = new EventEmitter<Teacher[]>();

  public teacherList: Teacher[];
  public teacherItem = '';
	public student: FormGroup = this.studentService.initialSubject();
  public displayAdd = false;
  public display = false;
  public editTeacherItem: Teacher;
  public types: SelectItem[] = [
		{ label: 'Contract', value: 'contract' },
		{ label: 'Beneficiary', value: 'beneficiary' }
  ];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  deleteTeacher(teacher: Teacher) {
	  this.studentService.deleteTeacher(teacher);
   this.teacherList = this.studentService.getStudentsFromLocalSrotage();
   this.list.emit(this.teacherList);
  }
show(data) {
  console.log(data);
}
  	addStudent(teacher: string) {
		this.displayAdd = true;
		this.teacherItem = teacher;
  }

  editTeacher(teacherEdit: Teacher) {
    this.display = true;
    this.editTeacherItem = teacherEdit;
    this.teacherItem = teacherEdit.teacherName;
    console.log(teacherEdit, this.teacherItem, this.editTeacher);

  }

  saveEditTeacherName() {
    console.log(this.teacherItem);
    const newTeacher = new Teacher(this.teacherItem, this.editTeacherItem.student);
    this.studentService.saveEditTeacher(newTeacher);
    this.teacherList = this.studentService.getStudentsFromLocalSrotage();
    this.list.emit(this.teacherList);
    this.display = false;
  }

  // cancel(data) {
	// 	data = false;
  //   this.student.reset();
	// }

  saveNewStudent(data: ShowStudent) {
		  this.displayAdd = false;
		  this.studentService.addNewStudent(
			this.teacherItem,
			new ShowStudent(
				data.fullName,
				data.classNumber,
				data.studentType,
				data.startDate,
				0
			)
		);
    this.teacherList = this.studentService.getStudentsFromLocalSrotage();
    this.list.emit(this.teacherList);
	}

}

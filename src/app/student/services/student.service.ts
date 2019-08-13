import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../models/teacher';
import { ShowStudent } from '../models/showStudent';

@Injectable({
	providedIn: 'root'
})
export class StudentService {
	public pay: FormGroup = this.fb.group({
		pay: [ null, Validators.compose([Validators.required]) ]
	});
	public teacherList: Teacher[];
	public teacherForm: FormGroup = this.fb.group({
		name: [ '', Validators.compose([Validators.required]) ],
		students: this.fb.array([ this.initialSubject() ])
	});
	constructor(private fb: FormBuilder) {}

	initialSubject(): FormGroup {
		return this.fb.group({
			fullName: [
				'',
			 	Validators.compose([
					Validators.required,
					Validators.minLength(2)
				]) ],
			classNumber: [
				'',
				Validators.compose([
					Validators.required,
					Validators.min(1),
					Validators.max(9)])
				],
			studentType: [ '',  Validators.compose([Validators.required]) ],
			startDate: [ '',  Validators.compose([Validators.required]) ],
			payArray: this.fb.array([ this.pay ])
		});
	}

	saveStudent(data: FormGroup): number {
		console.log(data.value);
		const arr: ShowStudent[] = data.value.students.map((el: ShowStudent) => {
			return new ShowStudent(
				el.fullName,
				el.classNumber,
				el.studentType,
				el.startDate,
				0
			);
		});
		const teacher: Teacher = new Teacher(data.value.name, arr);
		console.log(teacher);

		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.push(teacher);
		this.setStudentToLocalStorage(this.teacherList);
		return teacher.students.length;
	}

	setStudentToLocalStorage(student: Teacher[]): void {
		localStorage.setItem('studentList', JSON.stringify(student));
	}

	getStudentsFromLocalSrotage(): Teacher[] | [] {
		const data = localStorage.getItem('studentList');
		return data === null ? [] : JSON.parse(data);
	}

	setPayArray(id: number, data: number, name: string): void {
		console.log(id, data, name);
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.map((teacher: Teacher) => {
			teacher.students.forEach((student: ShowStudent, i: number) => {
        console.log(student._id === id);
				    if (student._id === id && student.fullName === name) {
          console.log('finded');
					     student.payArray += data;
					     console.log(student);
				}
			});
		});
		console.log(this.teacherList);
		this.setStudentToLocalStorage(this.teacherList);
	}

	deleteStudent(id: number, name: string): void {
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.map((teacher: Teacher) => {
			if (teacher.name === name) {
				const index = teacher.students.findIndex(
					(el: ShowStudent) => el._id === id
				);
				teacher.students.splice(index, 1);
			}
		});
		this.setStudentToLocalStorage(this.teacherList);
	}

	addNewStudent(name: string, student: ShowStudent): void {
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.map((teacher: Teacher) => {
			if (teacher.name === name) {
				teacher.students.push(student);
			}
		});
		this.setStudentToLocalStorage(this.teacherList);
	}

	saveEditTeacher(newTeacher: Teacher): void {
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.map((teacher: Teacher) => {
			if (teacher.students[0].fullName === newTeacher.students[0].fullName) {
				teacher.name = newTeacher.name;
			}
		});
		this.setStudentToLocalStorage(this.teacherList);
	}

	saveEditStudent(editStudent: ShowStudent) {
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.map((teacher: Teacher) => {
			teacher.students.forEach((student: ShowStudent) => {
				if (editStudent._id === student._id) {
					student.fullName = editStudent.fullName;
					student.classNumber = editStudent.classNumber;
					student.studentType = editStudent.studentType;
					student.startDate = editStudent.startDate;
				}
			});
		});
		this.setStudentToLocalStorage(this.teacherList);
	}

	deleteTeacher(teacherDel: Teacher): void {
		this.teacherList = this.getStudentsFromLocalSrotage();
		const index = this.teacherList.findIndex(
			(el: Teacher) =>
			el.name === teacherDel.name
		);
		this.teacherList.splice(index, 1);
		this.setStudentToLocalStorage(this.teacherList);
	}

	public getStudentsByname(name: string): ShowStudent[] {
		let students: ShowStudent[];
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.forEach((teacher: Teacher) => {
			if (teacher.name === name) {
				students = (teacher.students);
			}
		});

		return students;
	}
}

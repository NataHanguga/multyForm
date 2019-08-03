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
		teacherName: [ '', Validators.compose([Validators.required]) ],
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

	addStudent(): void {
		const control = this.teacherForm.controls.students as FormArray;
		control.push(this.initialSubject());
	}

	removeSubject(i: number): void {
		const control = this.teacherForm.controls.students as FormArray;
		control.removeAt(i);
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
		const teacher: Teacher = new Teacher(data.value.teacherName, arr);
		console.log(teacher);

		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.push(teacher);
		this.setStudentToLocalStorage(this.teacherList);
		return teacher.student.length;
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
			teacher.student.forEach((student: ShowStudent, i: number) => {
        console.log(student.id === id);
				    if (student.id === id && student.fullName === name) {
          console.log('finded');
					     student.payArray += data;
					     console.log(student);
				}
			});
		});
		console.log(this.teacherList);
		this.setStudentToLocalStorage(this.teacherList);
	}

	deleteStudent(id: number, teacherName: string): void {
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.map((teacher: Teacher) => {
			if (teacher.teacherName === teacherName) {
				const index = teacher.student.findIndex(
					(el: ShowStudent) => el.id === id
				);
				teacher.student.splice(index, 1);
			}
		});
		this.setStudentToLocalStorage(this.teacherList);
	}

	addNewStudent(teacherName: string, student: ShowStudent): void {
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.map((teacher: Teacher) => {
			if (teacher.teacherName === teacherName) {
				teacher.student.push(student);
			}
		});
		this.setStudentToLocalStorage(this.teacherList);
	}

	saveEditTeacher(newTeacher: Teacher): void {
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.map((teacher: Teacher) => {
			if (teacher.student[0].fullName === newTeacher.student[0].fullName) {
				teacher.teacherName = newTeacher.teacherName;
			}
		});
		this.setStudentToLocalStorage(this.teacherList);
	}

	saveEditStudent(editStudent: ShowStudent) {
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.map((teacher: Teacher) => {
			teacher.student.forEach((student: ShowStudent) => {
				if (editStudent.id === student.id) {
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
			el.teacherName === teacherDel.teacherName
		);
		this.teacherList.splice(index, 1);
		this.setStudentToLocalStorage(this.teacherList);
	}

	public getStudentsByTeacherName(name: string): ShowStudent[] {
		let students: ShowStudent[];
		this.teacherList = this.getStudentsFromLocalSrotage();
		this.teacherList.forEach((teacher: Teacher) => {
			if (teacher.teacherName === name) {
				students = (teacher.student);
			}
		});

		return students;
	}
}

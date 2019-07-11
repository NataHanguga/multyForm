import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
import { deserialize } from 'typescript-json-serializer';
import { Teacher } from '../models/teacher';
import { ShowStudent } from '../models/showStudent';
import { PayArray } from '../models/payArray';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public student: FormGroup = this.fb.group({
    fullName: [''],
    classNumber: [''],
    type: [''],
    subject: this.fb.array([this.initialSubject()])
  });
  public studentsList: Student[];
  constructor(private fb: FormBuilder) {}

  initialSubject(): FormGroup {
    return this.fb.group({
      title: [''],
      teacher: [''],
      startDate: [''],
      finishDate: [''],
      pay: ['']
    });
  }

  addSubject() {
    const control = this.student.controls.subject as FormArray;
    control.push(this.initialSubject());
  }

  removeSubject(i: number) {
    const control = this.student.controls.subject as FormArray;
    control.removeAt(i);
  }

  saveStudent(data: FormGroup): number {
    console.log(data.value.subject);
    const arr: Subject[] = data.value.subject.map((el: Subject) => {
      return new Subject(el.title, el.teacher, el.startDate, el.finishDate, []);
    });
    const student: Student = new Student(
      data.value.fullName,
      data.value.classNumber,
      data.value.type,
      arr
    );
    console.log(student);

    this.studentsList = this.getStudentsFromLocalSrotage();
    this.studentsList.push(student);
    this.setStudentToLocalStorage(this.studentsList);
    return student.subject.length;
  }

  setStudentToLocalStorage(student: Student[]) {
    localStorage.setItem('studentList', JSON.stringify(student));
  }

  getStudentsFromLocalSrotage(): Student[] | [] {
    const data = localStorage.getItem('studentList');
    return data === null ? [] : JSON.parse(data);
  }

  groupByTeacher(arr: Teacher[]) {
    return arr.reduce((newArr, x) => {
      (newArr[x.teacherName] = newArr[x.teacherName] || []).push(x);
      return newArr;
    }, []);
  }

  refractData() {
    this.studentsList = this.getStudentsFromLocalSrotage();
    const studentList: ShowStudent[] = [];
    this.studentsList.map((student: Student) => {
      student.subject.map((subj: Subject) => {
        const stud = new ShowStudent(
          student.fullName,
          student.classNumber,
          student.studentType,
          subj.teacher,
          subj.pay
        );
        console.log(stud);
        studentList.push(stud);
      });
    });

    console.log(studentList);

    const arr: Teacher[]  = studentList.map((student: ShowStudent) => {
      return new Teacher(student.teacher, deserialize(student, ShowStudent));
    });



    console.log(arr, this.groupByTeacher(arr));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Teacher } from '../models/teacher';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  public getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.url + 'teachers');
  }

  public createTeacher(n: string): Observable<any> {
    return this.http.post(this.url + 'teachers', {name: n});
  }

  public deleteTeacher(id: string): Observable<any> {
    const url: string = this.url + 'teachers/' + id;
    return this.http.delete(url);
  }

  public editTeacherName(id: string, n: string): Observable<any> {
    const url: string = this.url + 'teachers/' + id;
    return this.http.patch(url, {newName: n});
  }

  public getStudentsByTeacherId(id: string): Observable<any> {
    const url: string = this.url + 'students/' + id;
    return this.http.get(url).pipe(pluck('studentsArr'));
  }

  public addStudentToTeacher(id: string, student: Student): Observable<any> {
    const url: string = this.url + 'students/' + id;
    return this.http.post(url, student).pipe(pluck('studentsArr'));
  }

  public editStudent(id: string, student: Student): Observable<any> {
    const url: string = this.url + 'students/' + id + '/' + student.id;
    return this.http.patch(url, student).pipe(pluck('studentsArr'));
  }

  public deleteStudent(id: string, studentId: string): Observable<any> {
    const url: string = this.url + 'students/' + id + '/' + studentId;
    return this.http.delete(url).pipe(pluck('studentsArr'));
  }
}

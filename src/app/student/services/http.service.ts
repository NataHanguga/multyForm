import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';
import { map, pluck } from 'rxjs/operators';
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
    console.log(url, n);
    return this.http.patch(url, {newName: n});
  }

  public getStudentsByTeacherId(id: string): Observable<any> {
    const url: string = this.url + 'students/' + id;
    return this.http.get(url).pipe(pluck('studentsArr'));
  }
}

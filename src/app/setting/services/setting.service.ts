import { Grade } from './../components/teacher-categories/grade.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private readonly url = 'http://localhost:3000/setting/';

  constructor(private http: HttpClient) { }

  public getPayConstant(): Observable<any> {
    return this.http.get(this.url + 'pay');
  }

  public editPayConstant(newPay: string): Observable<any> {
    return this.http.patch(this.url + 'pay/pay', {pay: newPay});
  }

  public getTeachersCategories(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.url + 'grade');
  }

  public addTeacherCategories(newGrade: Grade): Observable<Grade[]> {
    return this.http.post<Grade[]>(this.url + 'grade', newGrade);
  }

  public editTeacherCategory(editGrade: Grade): Observable<Grade[]> {
    return this.http.patch<Grade[]>(this.url + 'grade/' + editGrade.id, editGrade);
  }
}

import { Education } from '../models/education.model';
import { Grade } from '../models/grade.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private readonly url = 'http://localhost:3000/setting/';
  public payConstant: number;
  constructor(private http: HttpClient) { this.getPayConstantForStudent()}

  public getPayConstant(): Observable<any> {
    return this.http.get(this.url + 'pay');
  }

  public getPayConstantForStudent(): void {
    this.getPayConstant().subscribe((data) => this.payConstant = data.pay);
    // return this.payConstant;
  }

  public editPayConstant(newPay: string): Observable<any> {
    return this.http.patch(this.url + 'pay/pay', {pay: newPay});
  }

  public getTeachersCategories(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.url + 'grade');
  }

  public addTeacherCategories<T>(item: any): Observable<T[]> {
    return this.http.post<T[]>(this.url + 'grade', item);
  }

  public editTeacherCategory(editGrade: Grade): Observable<Grade[]> {
    return this.http.patch<Grade[]>(this.url + 'grade/' + editGrade.id, editGrade);
  }

  public removeTeacherCategory(id: number): Observable<Grade[]> {
    return this.http.delete<Grade[]>(this.url + 'grade/' + id);
  }

  public getEducationList(): Observable<Education[]> {
    return this.http.get<Education[]>(this.url + 'education');
  }

  public createEducation(label: Education): Observable<Education[]> {
    return this.http.post<Education[]>(this.url + 'education', label);
  }
  
  public editEducation(edu: Education): Observable<Education[]> {
    return this.http.patch<Education[]>(this.url + 'education/' + edu.id, edu);
  }

  public removeEducation(id: number): Observable<Education[]> {
    return this.http.delete<Education[]>(this.url + 'education/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Percent } from './percent.model';

@Injectable({
  providedIn: 'root'
})
export class PercentService {
  private readonly url = 'http://localhost:3000/setting/percent';
  constructor(private http: HttpClient) { }

  public getPercents(): Observable<Percent[]> {
    return this.http.get<Percent[]>(this.url);
  }

  public createPercent(percent: Percent): Observable<Percent[]> {
    return this.http.post<Percent[]>(this.url, percent);
  }

  public editPercent(percent: Percent): Observable<Percent[]> {
    return this.http.patch<Percent[]>(`${this.url}/${percent.id}`, percent);
  }

  public removePercent(id: number): Observable<Percent[]> {
    return this.http.delete<Percent[]>(`${this.url}/${id}`);
  }
}

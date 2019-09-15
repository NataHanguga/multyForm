import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Position } from './position.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private readonly url = 'http://localhost:3000/setting/position';
  constructor(private http: HttpClient) { }

  public get(): Observable<Position[]> {
    return this.http.get<Position[]>(this.url);
  }

  public create(percent: Position): Observable<Position[]> {
    return this.http.post<Position[]>(this.url, percent);
  }

  public edit(percent: Position): Observable<Position[]> {
    return this.http.patch<Position[]>(`${this.url}/${percent.id}`, percent);
  }

  public remove(id: number): Observable<Position[]> {
    return this.http.delete<Position[]>(`${this.url}/${id}`);
  }
}

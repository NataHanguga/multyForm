import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rank } from './rank.model';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  private readonly url = 'http://localhost:3000/setting/rank';
  constructor(private http: HttpClient) { }

  public get(): Observable<Rank[]> {
    return this.http.get<Rank[]>(this.url);
  }

  public create(item: Rank): Observable<Rank[]> {
    return this.http.post<Rank[]>(this.url, item);
  }

  public edit(item: Rank): Observable<Rank[]> {
    return this.http.patch<Rank[]>(`${this.url}/${item.id}`, item);
  }

  public remove(id: number): Observable<Rank[]> {
    return this.http.delete<Rank[]>(`${this.url}/${id}`);
  }
}

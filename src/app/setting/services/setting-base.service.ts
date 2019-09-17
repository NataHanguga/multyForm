import { Setting } from './../models/base.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingBaseService<T> {
  public path = '';
  private readonly URL = 'http://localhost:3000/setting/';
  private url: string;
  constructor(private http: HttpClient) {}

  public setUrl(path): void {
    this.path = path;
    this.url = `${this.URL}${this.path}`;
  }

  public get(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  public create(item: Setting): Observable<T[]> {
    return this.http.post<T[]>(this.url, item);
  }

  public edit(item: Setting): Observable<T[]> {
    return this.http.patch<T[]>(`${this.url}/${item.id}`, item);
  }

  public remove(id: number): Observable<T[]> {
    return this.http.delete<T[]>(`${this.url}/${id}`);
  }
}

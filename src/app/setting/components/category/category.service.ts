import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly url = 'http://localhost:3000/setting/category';
  constructor(private http: HttpClient) { }

  public get(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  public create(item: Category): Observable<Category[]> {
    return this.http.post<Category[]>(this.url, item);
  }

  public edit(item: Category): Observable<Category[]> {
    return this.http.patch<Category[]>(`${this.url}/${item.id}`, item);
  }

  public remove(id: number): Observable<Category[]> {
    return this.http.delete<Category[]>(`${this.url}/${id}`);
  }
}

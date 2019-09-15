import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdditionalPosition } from './additional-position.model';

@Injectable({
  providedIn: 'root'
})
export class AdditionalPositionService {

  private readonly url = 'http://localhost:3000/setting/additional-position';
  constructor(private http: HttpClient) { }

  public get(): Observable<AdditionalPosition[]> {
    return this.http.get<AdditionalPosition[]>(this.url);
  }

  public create(item: AdditionalPosition): Observable<AdditionalPosition[]> {
    return this.http.post<AdditionalPosition[]>(this.url, item);
  }

  public edit(item: AdditionalPosition): Observable<AdditionalPosition[]> {
    return this.http.patch<AdditionalPosition[]>(`${this.url}/${item.id}`, item);
  }

  public remove(id: number): Observable<AdditionalPosition[]> {
    return this.http.delete<AdditionalPosition[]>(`${this.url}/${id}`);
  }
}

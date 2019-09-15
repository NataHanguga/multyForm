import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pay } from './pay.model';

@Injectable({
  providedIn: 'root'
})
export class PayConstantService {

  private readonly url = 'http://localhost:3000/setting/pay';

  constructor(private http: HttpClient) { }

  public get(): Observable<Pay> {
    return this.http.get<Pay>(this.url);
  }

  public edit(item: number): Observable<Pay> {
    return this.http.patch<Pay>(this.url + '/pay', {pay: item});
  }
}

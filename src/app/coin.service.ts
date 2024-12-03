import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private apiUrl = 'https://api.coinlore.net/api/tickers/';

  constructor(private http: HttpClient) {}

  getCoins(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

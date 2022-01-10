import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor(private readonly http: HttpClient) { }

  getRundomNumb(): Observable<string> {
    return this.http.get<string>( environment.apiURL, { responseType: 'text' as 'json' })
  }

  updateStorage(odds:string[]):void {
    let oddsItem = JSON.parse(localStorage.getItem('odds')!);
    if (oddsItem) {
      oddsItem = { ...oddsItem, ...odds };
      localStorage.setItem('odds', JSON.stringify(oddsItem));
    } else {
      localStorage.setItem('odds', JSON.stringify(odds));
    }
  }

}

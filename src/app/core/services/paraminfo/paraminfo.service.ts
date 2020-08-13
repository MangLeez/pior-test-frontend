import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const endpoint = environment.services.paraminfo.endPoint;
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ParaminfoService {

 
  constructor(private http: HttpClient) { }
  inquiryAllParams(): Observable<any> {
    const url = endpoint+'/findall';
    return this.http.get(url, httpOptions).pipe(
      tap(_ => console.log('service inquiryAllParams success'))
    );
  }
}


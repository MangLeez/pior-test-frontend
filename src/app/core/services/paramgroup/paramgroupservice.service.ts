import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

const endpoint = environment.services.paramgroup.endPoint;
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ParamgroupserviceService {

  constructor(private http: HttpClient) { }
  inquiryAllParams(): Observable<any> {
    const url = endpoint+'/findall';
    return this.http.get(url, httpOptions).pipe(
      tap(_ => console.log('service inquiryAllParams success'))
    );
  }
}

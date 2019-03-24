import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, public authenticationService: AuthenticationService) { }
  /* Method to make an API call
    eg:
    globalHttp.callApi(method, url, body)
    .subscribe(res => {

      },
      err => {

      });
    - Body must be passed as null for request that does have body. eg: GET
  */
  public callApi(method: string, url: string, body: any): Observable<any> {
    const payload = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').append('x-access-token', this.authenticationService.token),
    };
    if (body !== null) {
      payload['body'] = body;
    }
    return this.http.request(method, url, payload);
  }

}

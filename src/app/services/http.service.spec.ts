import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { HttpService } from './http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AuthenticationService } from '../services/authentication.service';

const mockAuthResp = 'valid_jwt_string';
fdescribe('HttpService', () => {
  let mockHttp: HttpClient;
  let mockAuth: AuthenticationService;
  beforeEach(() => {
    mockHttp = { request: null } as HttpClient;
    spyOn(mockHttp, 'request').and.callFake((arg1, arg2, arg3) => {
      return (Observable.of(arg3));
    });
    mockAuth = { token: null } as AuthenticationService;
    spyOn(mockAuth, 'token').and.returnValue(Observable.of({
      json: () => mockAuthResp
    }));
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: mockHttp
        },
        {
          provide: AuthenticationService,
          useValue: mockAuth
        },
        HttpService]
    });
  });

  fit('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  fit('should not have body property- for requests with out body/null', fakeAsync(
    inject([HttpService], (service: HttpService) => {
      service.callApi('GET', 'https://dailyninja.marax.ai:4004', null)
        .subscribe(res => {
          expect(res.hasOwnProperty('body')).toBeFalsy();
        });
    })
  ));

  fit('should append body to payload - for requests with body', fakeAsync(
    inject([HttpService], (service: HttpService) => {
      service.callApi('GET', 'https://dailyninja.marax.ai:4004', {data: 'Test data'})
        .subscribe(res => {
          expect(res['body']).toEqual({data: 'Test data'});
        });
    })
  ));
});

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { DialogConstants } from '../auth/auth.constants';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DialogFlowService {

  constructor(private http: Http) { }

  public answer: any;

  public getHeaders(): any {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${DialogConstants.accessToken}`);
    return headers;
  }

  public askQuestion(query: string): Observable<any> {
    let data = {
      query: query,
      lang: 'en',
      sessionId: 12345
    };

    return this.http.post(DialogConstants.dialogURL, data, { headers: this.getHeaders() })
      .map((res) => {
        return res.json();
      });
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class TalksService {

  constructor(private http: Http) {
  }

  getTalks() {
    return this.http.get('http://data.agenda.wedeploy.io/talks').delay(2000).map(res => res.json());
  }

}

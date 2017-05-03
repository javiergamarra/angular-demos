import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TalksService {

  constructor(private http: Http) {
  }

  getTalks() {
    return this.http.get('http://data.agenda.wedeploy.io/talks').map(res => res.json());
  }

}

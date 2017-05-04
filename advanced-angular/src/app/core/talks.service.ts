import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class TalksService {

  constructor(private http: Http) {
  }

  getTalks(title) {

    const params = new URLSearchParams();
    if (title) {
      params.set('filter', JSON.stringify({title}));
    }

    return this.http
      .get('http://data.agenda.wedeploy.io/talks', {params})
      .map(res => res.json());
  }

}

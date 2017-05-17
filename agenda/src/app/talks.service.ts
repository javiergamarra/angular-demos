import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class TalksService {

  constructor(private http: Http) {
  }

  getAllTalks(filter?) {

    const params = new URLSearchParams();
    params.set('search',
      JSON.stringify({
        '*': {'operator': 'fuzzy', 'value': {'query': filter}}
      }));

    return this.http.get('http://data.agenda.wedeploy.io/talks', {params: params})
      .map(res => res.json())
      .map(res => res.documents);
  }

}

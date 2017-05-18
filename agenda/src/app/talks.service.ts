import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

const API_URL = 'http://data.agenda.wedeploy.io/talks';

@Injectable()
export class TalksService {

  constructor(private http: Http) {
  }

  getAllTalks(filter?) {

    const params = new URLSearchParams();
    params.set('search',
      JSON.stringify({
        '*': {'operator': 'fuzzy', 'value': {'query': filter !== '' ? filter : null}}
      }));

    return this.http.get(API_URL, {params: params})
      .map(res => res.json())
      .map(res => res.documents);
  }

  getTalk(id) {
    return this.http.get(`${API_URL}/${id}`)
      .map(res => res.json());
  }

  saveTalk(talk) {
    console.log(talk);
    return this.http.post(`${API_URL}/`, talk)
      .map(res => res.json());
  }

}

import { Injectable, Optional } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { TalksConfig } from './talks-config';

@Injectable()
export class TalksService {

  constructor(private http: Http, @Optional() private config: TalksConfig) {
  }

  getTalks(title) {

    const params = new URLSearchParams();
    if (title) {
      params.set('filter', JSON.stringify({title}));
    }

    return this.http
      .get(this.config.server, {params})
      .map(res => res.json());
  }

}

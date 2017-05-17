import { Component, OnInit } from '@angular/core';
import { TalksService } from '../talks.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks: Array<any>;

  constructor(private talksService: TalksService, private http: Http) {
    this.http.get('http://data.agenda.wedeploy.io/talks')
      .map(res => res.json())
      .subscribe(x => this.talks = x, err => console.log(err));
  }

  ngOnInit() {
    this.talks = this.talksService.getAllTalks();
  }

  onClick(talk) {
    console.log(talk);
  }

  onKeyUp(value) {
    this.talks = this.talksService.getAllTalks().filter(x => x.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}



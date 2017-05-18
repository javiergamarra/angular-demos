import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';
import { TalksService } from '../talks.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks$;

  @ViewChild('search') search: ElementRef;

  constructor(private talksService: TalksService) {
  }

  ngOnInit() {
    this.talks$ = Observable.fromEvent(this.search.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter(text => text.length > 2)
      .debounceTime(700)
      .distinctUntilChanged()
      .switchMap(x => this.talksService.getAllTalks(x));
  }

  onClick(talk) {
    console.log(talk);
  }
}



import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TalksService } from '../talks.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css'],
  styles: [
      `:host {
      display: block;
      padding-left: 20px;
    }`
  ]
})
export class TalksComponent implements OnInit {

  talks$: Observable<any>;

  @ViewChild('search')
  private search: ElementRef;

  constructor(private talkService: TalksService, private renderer: Renderer2) {
  }

  ngOnInit() {

    this.talks$ = this.doNetworkRequest();
  }

  private doNetworkRequest() {
    return Observable.fromEvent(this.search.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter(text => text.length > 2)
      .debounceTime(700)
      .startWith('')
      .do(x => console.log(x))
      .distinctUntilChanged()
      .switchMap(x => this.talkService.getTalks(x));
  }

  onClicked($event, element) {
    console.log($event);
    this.renderer.setStyle(element, 'background-color', 'lightgray');
  }

}

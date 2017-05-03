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

    const obsA = Observable.interval(1000).map(x => 'a');
    const obsB = Observable.interval(1000).map(x => 'b');

    // obsA.combineLatest(obsB).subscribe(x => console.log(x));
    // obsA.concat(obsB).subscribe(x => console.log(x));
    // obsA.merge(obsB).subscribe(x => console.log(x));
    // obsA.race(obsB).subscribe(x => console.log(x));
    // obsA.zip(obsB).subscribe(x => console.log(x));

      // this.talks$ =
    //   Observable.merge(Observable.of(''),
    //     Observable.fromEvent(this.search.nativeElement, 'keyup')
    //       .map((e: any) => e.target.value)
    //       .filter(text => text.length > 2))
    //     .do(x => console.log(x))
    //     .debounceTime(700)
    //     .distinctUntilChanged()
    //     .switchMap(x => this.talkService.getTalks(x));
  }

  onClicked($event, element) {
    console.log($event);
    this.renderer.setStyle(element, 'background-color', 'lightgray');
  }

}

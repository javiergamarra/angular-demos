import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TalksService } from '../core/core.module';
import { CardComponent } from '../shared/card.component';

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
export class TalksComponent implements OnInit, AfterViewInit {

  talks$: Observable<any>;

  @ViewChild('search')
  private search: ElementRef;

  @ViewChild('inject', {read: ViewContainerRef})
  private inject: ViewContainerRef;

  constructor(private talkService: TalksService, private renderer: Renderer2, private componentFactory: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.talks$ = this.doNetworkRequest();
  }

  ngAfterViewInit(): void {
    this.inject.createComponent(this.componentFactory.resolveComponentFactory(CardComponent));
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

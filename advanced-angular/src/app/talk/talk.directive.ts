import {
  AfterViewInit,
  Directive,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appTalk]'
})
export class TalkDirective implements AfterViewInit {

  @Input() appTalk;

  ngAfterViewInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  @HostBinding() get innerText() {
    return this.appTalk;
  }

  @HostListener('click') onClick() {
    console.log('clicked!');
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }


}

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTalk]'
})
export class TalkDirective {

  @Input() set appTalk(value) {
    this.viewContainerRef.createEmbeddedView(this.templateRef, {$implicit: '1'});
    this.viewContainerRef.createEmbeddedView(this.templateRef, {$implicit: '2'});
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }


}

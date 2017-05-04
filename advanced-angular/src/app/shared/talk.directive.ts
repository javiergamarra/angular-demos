import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTalk]'
})
export class TalkDirective {

  @Input() set appTalkOf(value) {
    console.log(value);
    this.viewContainerRef.createEmbeddedView(this.templateRef, {$implicit: value[0].title});
    this.viewContainerRef.createEmbeddedView(this.templateRef, {$implicit: value[1].title});
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

}

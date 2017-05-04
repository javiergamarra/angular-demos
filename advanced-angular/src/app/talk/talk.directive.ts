import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTalk]'
})
export class TalkDirective {

  @Input() appTalk;

  @HostBinding() get innerText() {
    return this.appTalk;
  }

  constructor() {
  }

}

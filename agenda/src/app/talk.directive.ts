import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTalk]'
})
export class TalkDirective {

  constructor() {
  }

  @HostBinding() innerText = 'Talk!';

}

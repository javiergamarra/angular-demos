import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTalk]'
})
export class TalkDirective {

  @HostBinding() innerText = 'inner text';

  constructor() {
  }

}

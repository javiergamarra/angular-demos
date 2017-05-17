import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  private talk: Talk;

  constructor(public name = 'Rx', public type = TalkCategory.Talk) {
    this.talk = {name, type};
  }

}

interface Talk {
  name: String;
  type: TalkCategory;
}

enum TalkCategory { Workshop, Talk }

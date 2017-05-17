import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
  }

  stringTemplates() {

    const template = `hi ${name}!`;

    const taggedTemplate = tagged`name, ${name} and ${this.title}`;

    function tagged(literals, ...placeholders) {

    }
  }

  arrow() {
    const value = 'nhpatt';
    return param => value;
  }

  lexicalThis() {
    setTimeout(function () {
      alert(this.title);
    }, 1000);

    setTimeout(() => alert(this.title), 1000);
  }

  spread(...args) {
    console.log(args);
  }

  rest() {
    this.spread(...[2, 3, 4]);
    console.log([1, 2, ...[3, 4, 5], 6, 7]);
  }

  objectLiterals() {
    const foo = 'foo';
    const obj = {foo: foo};
    console.log(obj);
  }

  defaultParameters(value = 'nhpatt') {
    console.log(value);
  }

  metodo() {

  }

  destructuring() {
    const obj = {foo: 'foo'};

    const {foo} = obj;
    console.log(foo);
  }

  iterators() {
    const arr = [1, 2, 3, 4];

    for (const obj of arr) {
      console.log(obj);
    }
  }

  promises() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hi!');

        reject(new Error());
      }, 2000);
    });

    promise.then(x => console.log(x));

    Promise.all([promise]);
    Promise.race([promise]);
  }

  // usingGenerators() {
  //   const generator = this.generators();
  //   console.log(generator.next().value);
  // }
  //
  // generators = function* infiniteSequence() {
  //   let i = 0;
  //   while (true) {
  //     yield i++;
  //   }
  // };

  es7() {
    console.log(2 ** 3);
    console.log([1, 2, 3].includes(2));
  }

  async es8() {
    const hi = await this.delay();
    console.log(`${hi} nhpatt!`);
  }

  delay() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hi');

        reject(new Error());
      }, 2000);
    });
  }
}

class TalksComponent extends AppComponent {

  atributo;

  metodo() {
    super.metodo();
  }

  constructor() {
    super();
  }
}



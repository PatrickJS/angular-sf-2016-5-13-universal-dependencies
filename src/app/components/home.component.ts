import {Component} from '@angular/core';
import {isBrowser} from 'angular2-universal';


import {Store} from '../../universal-store/src/store';


@Component({
  selector: 'home',
  template: `
    <div>This is the "Home" page</div>

    <form (ngSubmit)="onSubmit()">
      <label>
        name:
        <input type="text" [(ngModel)]="data">
      </label>
    </form>

    <pre>this.store.get('data') = {{ store.get('data') | json }}</pre>
  `
})
export class Home {
  data = '';
  store = {
    get(prop) {
      return isBrowser ? localStorage.getItem(prop) : null;
    },
    set(prop, value) {
      return isBrowser ? localStorage.setItem(prop, value) : null;
    }
  };
  constructor(
      // public store: Store
    ) {

  }

  onSubmit() {
    this.store.set('data', this.data);
    this.data = '';
  }
}

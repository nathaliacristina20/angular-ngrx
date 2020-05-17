import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

import * as faker from 'faker';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { PersonNew } from './store/person.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people$: Observable<Person[]>;

  constructor(private store: Store<AppState>){
    this.people$ = this.store.pipe(select('people'));
  }

  addNew(){
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      id: new Date().getMilliseconds().toString()
    }

    this.store.dispatch(new PersonNew({ person }));
  }

  update(p: Person){

  }

  delete(p: Person){
    
  }
}

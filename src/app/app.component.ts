import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Panagiotis';

  person0 = {
    givenName: 'Panagiotis',
    surName: 'Papadopoulos',
    age: 39,
    email: 'panagiotis.fsdev@gmail.com',
    address: 'Athens, Greece'
    };

    person1 = {
      givenName: 'John',
      surName: 'Doe',
      age: 25,
      email: 'john.doe@gmail.com',
      address: 'New York, USA'
      };
}

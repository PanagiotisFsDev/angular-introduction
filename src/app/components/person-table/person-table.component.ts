import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person ={
    givenName: 'Panagiotis',
    surName: 'Papadopoulos',
    age: 39,
    email: 'panagiotis.fsdev@gmail.com'
  }
}

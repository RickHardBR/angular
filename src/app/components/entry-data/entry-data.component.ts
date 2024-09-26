import { Component } from '@angular/core';

@Component({
  selector: 'entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css'],
})
export class EntryDataComponent {
  textholder: string = '';
  passholder: string = '';
  color: string = 'red';
}

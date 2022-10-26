import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'dinamic',
  templateUrl: './dinamic.component.html',
})
export class DinamicComponent {
  name = '';

  constructor(route: ActivatedRoute) {

    route.params.subscribe((params) => {
      this.name = params['name']
    })
  }
  title = 'angular-simple';
}

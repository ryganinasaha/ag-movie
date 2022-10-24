import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  @Input() value = 0
}

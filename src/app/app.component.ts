import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-simple';
  initCounter = 100
  buttonText = 'none'
  style: any = {
    display : "block",
    backgroundColor : "red",
    color : "violet"
  }
  

  ToogleDisplay(){
    if (this.style.display === 'none') {
      this.buttonText = 'Скрыть текст'
      this.style.display = 'block'
    }
    else {
      this.buttonText = 'Показать текст'
      this.style.display = 'none'
    }
  }


  incCounter(value: number) {
    this.initCounter = this.initCounter + value
  }
  decCounter(value: number) {
    this.initCounter = this.initCounter - value
  }
}

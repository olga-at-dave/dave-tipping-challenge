import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  advanceAmount = 75;
  selectedBox = 1;
  tipOptions = [
    {
      amount: 5,
      trees: 5
    },
    {
      amount: 10,
      trees: 10
    },
    {
      amount: 15,
      trees: 30
    },
    {
      amount: 20,
      trees: 40
    }
  ];

  onSelectOption(option: number) {
    this.selectedBox = option;
  }

  onSubmit() {
    alert('Thank you for your tip!');
  }
}

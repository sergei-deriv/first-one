import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent {
  username = '';
  show = true;
  count = 0;
  actions = [];

  resetUsername() {
    this.username = '';
  }

  toggle() {
    this.show = !this.show;
    this.count++;
    this.actions.push('button click #' + this.count);
  }
}

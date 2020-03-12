import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-child *ngIf="visible"></app-child>
    <button (click)="show()">Show</button>`
})
export class AppComponent {
  visible = false;
  show() { this.visible = true; }
}

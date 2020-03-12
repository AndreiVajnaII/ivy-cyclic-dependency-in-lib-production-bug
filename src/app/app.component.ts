import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-parent *ngIf="visible"></lib-parent>
    <button (click)="show()">Show</button>`
})
export class AppComponent {
  visible = false;
  show() { this.visible = true; }
}

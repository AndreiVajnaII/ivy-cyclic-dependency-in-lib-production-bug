import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-child',
    template: `child`
})
export class ChildComponent {
    constructor(parent: AppComponent) { }
}

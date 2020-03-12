import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
    selector: 'lib-child',
    template: `child`
})
export class ChildComponent {
    constructor(parent: ParentComponent) {
        console.log(parent);
    }
}

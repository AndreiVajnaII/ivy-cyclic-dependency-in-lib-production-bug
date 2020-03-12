import { NgModule } from '@angular/core';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  exports: [ParentComponent]
})
export class CyclicModule { }

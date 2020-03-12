I generated a library project (`ng g lib cyclic`) in which I created two components with a cyclic dependency: ParentComponent includes ChildComponent in its template, while ChildComponent injects ParentComponent. In the app component, the ParentComponent is used in the template with the *ngIf directive bound to a flag that is set to true when a button is clicked.

If I build the library project (`ng build cyclic`) without the --prod flag, then serve the app with the --prod flag, when clicking the button, the component does not appear.

Debugging the problem, it seems that when creating  the TView of the ParentComponent, the directiveRegistry is null, and the flags are 0, so Angular does not see the associated node as a component. I noticed that if I serve the app without the --prod flag, after the module, a call to 
`ɵɵsetComponentScope` is inserted. This is done, as I understand it, in cases of cyclic dependencies.

However, when serving with the --prod flag, this call is not there, and that's why the flags are not set, and directiveRegistry is null.
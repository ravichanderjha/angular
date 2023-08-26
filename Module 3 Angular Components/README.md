**Module 3: Angular Components**

**Understanding Components**
Components are the building blocks of Angular applications. They encapsulate the logic, UI, and behavior of a specific part of the application. Components promote modularity, reusability, and maintainability.

**Creating Components using the Angular CLI**
The Angular CLI (Command Line Interface) simplifies the process of creating components. You can generate components using the following command:
```sh
ng generate component component-name
```
This command creates files for the component's TypeScript class, HTML template, CSS styles, and more, and it also automatically adds the component to the appropriate module.

**Component Templates, Styles, and Selectors**
- **Templates:** Component templates define the UI structure using Angular's HTML-like syntax. Templates can include data binding, directives, and event bindings.

- **Styles:** Component styles define the visual appearance of the component. Styles can be defined using CSS, SASS, or other styling languages.

- **Selectors:** The component's selector specifies how the component can be used in other templates. Selectors can be element selectors (`<app-my-component></app-my-component>`), attribute selectors (`<div app-my-component></div>`), or class selectors (`<div class="app-my-component"></div>`).

**Interpolation and Data Binding**
- **Interpolation:** Interpolation is used to embed expressions within double curly braces (`{{ expression }}`) in templates. It allows you to dynamically display component properties in the UI.

- **Property Binding:** Property binding allows you to bind a component property to a DOM element's property. It uses square brackets (`[property]="expression"`).

- **Event Binding:** Event binding allows you to bind DOM events to component methods. It uses parentheses (`(event)="method()"`).

- **Two-Way Data Binding:** Two-way data binding combines property binding and event binding to ensure that changes in the UI are reflected in the component and vice versa. It uses the `[(ngModel)]` directive.

**Component Lifecycle Hooks**
Angular components have a lifecycle consisting of different phases. Lifecycle hooks are methods that are automatically called at specific points in a component's lifecycle. Some important lifecycle hooks include:

- **ngOnInit:** Called after the component is initialized and its properties are set.
- **ngOnChanges:** Called when the component's input properties change.
- **ngAfterViewInit:** Called after the component's view (template) has been initialized.
- **ngOnDestroy:** Called when the component is about to be destroyed.

**Communication between Components (Input/Output)**
- **Input Binding:** Components can receive data from their parent components using input properties (`@Input`). The parent component passes data to the child component via these properties.

- **Output Binding:** Components can emit events to their parent components using output properties (`@Output`). The child component emits events using event emitters, and the parent component listens for these events.

**Example: Parent and Child Component Interaction:**
Parent Component (parent.component.html):
```html
<app-child [inputProperty]="parentProperty" (outputEvent)="handleEvent($event)"></app-child>
```
Child Component (child.component.ts):
```typescript
@Input() inputProperty: string;
@Output() outputEvent: EventEmitter<string> = new EventEmitter<string>();

emitEvent() {
  this.outputEvent.emit('Child component event emitted');
}
```

In this module, learners dive into the core of Angular development by understanding components, their creation, templates, data binding, and the lifecycle hooks that allow developers to manage component behavior at different stages. The communication mechanisms between parent and child components enable the creation of complex interactive UIs in Angular applications.
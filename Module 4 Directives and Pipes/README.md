**Module 4: Directives and Pipes**

**Directive Definition:**

In Angular, a directive is a class that allows you to add behavior or manipulate the DOM of an HTML element. Directives provide a way to extend HTML with new attributes or create custom behaviors. There are three main types of directives in Angular:

1. **Component Directives:** These are the most common directives in Angular. Components are a type of directive that has its own template, styles, and behavior. They are used to create reusable UI elements.

2. **Attribute Directives:** These are used to modify the appearance or behavior of an element. They are applied as attributes on HTML elements and are used to change their appearance or behavior. Attribute directives are used by surrounding the directive name with square brackets `[ ]`.

3. **Structural Directives:** These are used to modify the structure of the DOM by adding, removing, or manipulating elements. They are used to control the layout and rendering of elements in the template. Structural directives are used by preceding the directive name with an asterisk `*`.

**Examples of Each Directive Type:**

1. **Component Directive:**
   Components are a type of directive that encapsulates a piece of the user interface along with its logic. Here's a simple example:

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: '<h1>Hello, {{ name }}</h1>',
})
export class GreetingComponent {
  name = 'John';
}
```

2. **Attribute Directive:**
   Attribute directives change the appearance or behavior of an element. For instance, you can use Angular's built-in `ngStyle` directive to dynamically set inline styles:

```html
<div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">
  Styled Text
</div>
```

In this example, `ngStyle` dynamically sets the `color` and `font-size` styles of the `div` based on the `textColor` and `fontSize` properties in the component.

3. **Structural Directive:**
   Structural directives modify the structure of the DOM. The `ngIf` directive, for instance, conditionally includes or excludes an element based on an expression:

```html
<div *ngIf="isLoggedIn">Welcome, {{ username }}</div>
```

In this example, the `div` will only be rendered if the `isLoggedIn` property in the component is `true`.

These are just a few examples of the directive types in Angular. Directives are a powerful feature that allows you to create dynamic and reusable components, modify the appearance and behavior of elements, and control the structure of the DOM.

**Built-in Directives (ngIf, ngFor, ngSwitch)**
Directives in Angular are markers on a DOM element that tell Angular to perform some behavior on that element or its children. Built-in directives provide powerful ways to manipulate the DOM and apply dynamic behavior to elements.

- **ngIf:** The `ngIf` directive conditionally renders an element based on the truthiness of a given expression.

Example:
```html
<div *ngIf="userLoggedIn">Welcome, {{ username }}</div>
```

- **ngFor:** The `ngFor` directive iterates over a collection and generates elements for each item.

Example:
```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

- **ngSwitch:** The `ngSwitch` directive displays one of its nested elements based on the value of an expression.

Example:
```html
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Admin User</p>
  <p *ngSwitchCase="'user'">Regular User</p>
  <p *ngSwitchDefault>Guest User</p>
</div>
```

**Creating Custom Directives**
Custom directives allow you to extend Angular's behavior. They can be used to manipulate the DOM, add behavior, or encapsulate complex functionality.

Example:
```typescript
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'background-color', 'yellow');
  }
}
```

In this example, the `appHighlight` directive changes the background color of an element to yellow.

**Introduction to Pipes**
Pipes are used to transform data before displaying it in the view. Angular provides several built-in pipes, and you can also create custom pipes.

**Using Built-in Pipes**
Angular offers a variety of built-in pipes that perform common transformations:

- `uppercase` / `lowercase`: Converts text to uppercase or lowercase.
- `currency`: Formats a number as currency using locale-specific formatting rules.
- `date`: Formats a date into a readable string.
- `number`: Formats a number with commas and a decimal point.

Example:
```html
<p>{{ greeting | uppercase }}</p>
<p>{{ amount | currency:'USD':'symbol':'1.2-2' }}</p>
<p>{{ today | date:'short' }}</p>
<p>{{ value | number:'1.2-2' }}</p>
```

**Creating Custom Pipes**
You can create your own pipes to perform custom transformations. Custom pipes are particularly useful when you have specific data manipulation needs.

Example:
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

In this example, the `reverse` pipe reverses the characters of a string.

**Chaining and Parameterizing Pipes**
You can chain multiple pipes together to apply multiple transformations to a value. Also, pipes can accept parameters to customize their behavior.

Example:
```html
<p>{{ sentence | uppercase | reverse }}</p>
<p>{{ price | currency:'EUR':'symbol':'1.2-2' }}</p>
```

In this example, the `sentence` is first converted to uppercase and then reversed.

Pipes and directives are essential tools for building dynamic and flexible Angular applications. They allow you to manipulate the DOM, transform data, and create reusable components that enhance the user experience.
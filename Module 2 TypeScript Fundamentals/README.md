**Module 2: TypeScript Fundamentals**

**Introduction to TypeScript**
TypeScript is a superset of JavaScript that adds static types and other features to make JavaScript development more efficient and manageable, especially in larger projects. It gets transpiled (converted) to plain JavaScript, which is then executed in browsers or other JavaScript environments.

**Declaring Variables and Data Types**
- **Variable Declarations:** TypeScript supports declaring variables using `let`, `const`, and `var`. `let` and `const` provide block-scoped variables, while `var` has function scope.

- **Basic Data Types:** TypeScript supports JavaScript's primitive data types like `number`, `string`, `boolean`, `null`, `undefined`, and `symbol`.

- **Type Annotations:** Variables can be annotated with their data types using the colon syntax, like `let age: number = 30;`.

**Functions and Arrow Functions**
- **Function Declarations:** Functions can be defined using the `function` keyword. TypeScript allows specifying parameter types and return types.

- **Arrow Functions:** Arrow functions provide a concise syntax for defining functions. They automatically capture the surrounding context (`this`).

**Interfaces and Classes**
- **Interfaces:** Interfaces define contracts for object shapes. They can specify the structure of objects, including properties and methods. Interfaces are useful for ensuring type safety and defining APIs.

- **Classes:** Classes in TypeScript enable object-oriented programming. They can have properties, methods, constructors, and support inheritance.

**Modules and Namespaces**
- **Modules:** TypeScript supports modular development by allowing you to organize code into separate files. Modules help in creating a clean structure and managing dependencies.

- **Namespaces:** Namespaces provide a way to group related code into a single unit of code. They're used to avoid naming conflicts and improve code organization.

**TypeScript and Angular Integration**
Angular is developed using TypeScript, making it the recommended language for Angular projects. TypeScript's static typing, classes, and decorators align well with Angular's component-based architecture. Key points regarding TypeScript and Angular integration:

- **Decorators:** Decorators are a TypeScript feature used extensively in Angular. They provide metadata and enable functionality like component annotations, dependency injection, and route configuration.

- **Static Typing:** Angular leverages TypeScript's static type system to catch type-related errors during development and improve the maintainability of the codebase.

- **Type Inference:** TypeScript's type inference helps reduce the need for explicit type annotations, as the compiler can often deduce the types based on context.

- **Enhanced Tooling:** TypeScript's tooling support, such as code completion and type checking in editors, enhances the development experience in Angular projects.

**TypeScript and Angular Integration Example:**
```typescript
// Example TypeScript code using Angular decorators
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<h1>{{ greeting }}</h1>',
})
export class ExampleComponent implements OnInit {
  greeting: string;

  constructor() {
    this.greeting = 'Hello, TypeScript and Angular!';
  }

  ngOnInit() {
    console.log(this.greeting);
  }
}
```

The `@Component` decorator is a fundamental part of Angular that is used to define and configure components. Components are the building blocks of an Angular application, representing a specific part of the UI with its own logic, template, styles, and behavior. The `@Component` decorator is applied to a TypeScript class to provide metadata and configuration for that component.

Here's an in-depth description of the properties and configuration options available with the `@Component` decorator:

```typescript
@Component({
  selector: 'app-example',      // The HTML selector used to identify the component in templates
  templateUrl: './example.component.html',  // The external template file for the component
  styleUrls: ['./example.component.css'],   // The external style files for the component
  inputs: ['inputProperty'],     // Input properties for communication with parent components
  outputs: ['outputEvent'],      // Output properties for emitting events to parent components
  providers: [MyService],        // Dependency injection providers for this component
  directives: [MyDirective],     // Directives to be used in the component's template
  encapsulation: ViewEncapsulation.Emulated,  // CSS encapsulation strategy (Emulated, None, ShadowDom)
  changeDetection: ChangeDetectionStrategy.Default,  // Change detection strategy
})
```

Here's what each configuration option does:

- **selector:** Specifies how the component is identified in HTML templates. It can be an element selector (`<app-example></app-example>`), an attribute selector (`<div app-example></div>`), or a class selector (`<div class="app-example"></div>`).

- **templateUrl:** Points to the external HTML file that defines the template for the component.

- **styleUrls:** An array of external CSS files that provide styling for the component.

- **inputs:** An array of property names that can be set by parent components using property binding. These properties allow parent-child communication.

- **outputs:** An array of property names that emit events to parent components. These properties allow child-parent communication.

- **providers:** An array of providers for dependency injection. Services or other dependencies can be provided specifically for this component.

- **directives:** An array of directives that will be used within the component's template.

- **encapsulation:** Specifies how styles are encapsulated and scoped. It can be `ViewEncapsulation.Emulated` (default), `ViewEncapsulation.None`, or `ViewEncapsulation.ShadowDom`.

- **changeDetection:** Specifies the strategy for change detection. It can be `ChangeDetectionStrategy.Default` (default), `ChangeDetectionStrategy.OnPush`, or custom strategies.

The `@Component` decorator is an essential part of building Angular applications, allowing you to configure and customize the behavior and appearance of your components. By providing metadata through this decorator, you define how your component interacts with the rest of the application and with other components.
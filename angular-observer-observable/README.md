In **Angular**, we use **RxJS** (`Observable`, `Observer`, `Subject`, and `BehaviorSubject`) for reactive programming and handling asynchronous data streams efficiently.  

---

# **1️⃣ Observable & Observer**
- **`Observable`**: Represents a data stream that **emits values** over time.
- **`Observer`**: An object that **listens** to the `Observable` (i.e., subscribes to it).  

## **Example of Observable & Observer**
```typescript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  template: `<h3>Check the console for Observable output</h3>`,
})
export class ObservableDemoComponent implements OnInit {
  
  myObservable = new Observable<number>((observer) => {
    let count = 1;
    setInterval(() => {
      observer.next(count++); // Emit values
      if (count > 5) {
        observer.complete(); // Complete after 5 emissions
      }
    }, 1000);
  });

  ngOnInit() {
    this.myObservable.subscribe({
      next: (value) => console.log('Observer got value:', value),
      error: (err) => console.error('Observer got an error:', err),
      complete: () => console.log('Observer got complete!'),
    });
  }
}
```
### **🛠️ Explanation**
- `Observable` emits values every second.
- The `Observer` listens for these values using `subscribe()`.
- After 5 values, the `Observable` **completes**, stopping further emissions.

---

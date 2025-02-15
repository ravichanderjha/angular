import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.observable.subscribe({
      next: (value) => console.log('Observer got value:', value),
      error: (err) => console.error('Observer got an error:', err),
      complete: () => console.log('Observer got complete!'),
    });
  }
  title = 'angular-observer-observable';

  observable = new Observable<number>((observer)=>{
    let count = 1;
    setInterval(() => {
      observer.next(count++);
      if(count > 10)
        observer.complete();
    }, 1000);
  })
}

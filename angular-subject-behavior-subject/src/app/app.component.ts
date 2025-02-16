import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  subject = new Subject<String>();
  behaviorSubject = new BehaviorSubject<string>('Default Value');
  behaviorSubject$ = this.behaviorSubject.asObservable();
  title = 'angular-subject-behavior-subject';

  constructor(){
    this.subject.subscribe(data => console.log(data));
    this.behaviorSubject$.subscribe(data => console.log(data));

    this.subject.subscribe(data => console.log(data));
    this.behaviorSubject$.subscribe(data => console.log(data));

  }

  sendMessageToSubject(){
    this.subject.next(new Date().toISOString())
  }

  sendMessageToBehaviorSubject(){
    this.behaviorSubject.next(new Date().toISOString())
  }
}

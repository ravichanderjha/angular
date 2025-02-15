import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  providers: [LoggerService], // New instance per component

  styleUrl: './app.component.scss'
})
export class AppComponent {
  loggerId = 0;

  constructor(private logger: LoggerService) {
  }

  title = 'providers-example';

  logMessage() {
    this.logger.log('Message from AppComponent!');
  }

}

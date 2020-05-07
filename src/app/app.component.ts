import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics: string[] = ['Angular', 'React', 'Vue'];
  topicHasError: boolean = true;

  userModel = new User(
    'Richie',
    'richie@gmail.com',
    7773332222,
    'default',
    'morning',
    true
  )

  public validateTopic(value): void {
    this.topicHasError = value === 'default'
  }
}

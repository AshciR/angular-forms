import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics: string[] = ['Angular', 'React', 'Vue'];
  topicHasError: boolean = true;
  submitted: boolean = false;

  userModel = new User(
    'Richie',
    'richie@gmail.com',
    7773332222,
    'default',
    'morning',
    true
  )

  constructor(private _enrollmentService: EnrollmentService) { }

  public validateTopic(value): void {
    this.topicHasError = value === 'default'
  }

  public onSubmit() {
    console.log(this.userModel);
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log("Success!", data),
        error => console.error("Error!", error)
      )
  }
}

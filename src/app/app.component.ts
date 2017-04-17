import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  processing: boolean = false;
  step: string = "username";
  action: string = "NEXT";
  username: string;
  password: string;

  onNext(): void {
    if (this.step === "username") {
      this.step = "password";
      this.action = "LOGIN";
    } else {
      this.processing = true;
      console.log("submit(" + this.username + "," + this.password + ")");
    }
  }
}

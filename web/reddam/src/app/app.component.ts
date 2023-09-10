import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddam';

  //This would allow us to render login or sign up form items
  isLogin: boolean = true;
  //Updates the isLogin property
  updateIsLogin() {
    this.isLogin = !this.isLogin;
  }
}

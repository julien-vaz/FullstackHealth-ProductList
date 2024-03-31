import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {};
  
  loginFormModel = {user: '', accesskey: ''};
  
  onSubmit(){
    if (this.loginFormModel.user && this.loginFormModel.accesskey){
      this.router.navigate(["/home"]);
    }
  };

  goToSignUp(){
    this.router.navigate(["/cadastro"]);
  }
}

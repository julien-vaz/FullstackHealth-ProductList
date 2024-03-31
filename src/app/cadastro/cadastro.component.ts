import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.signUpForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      repeatPassword: new FormControl('')
    });
  }

  signUp(){
    if (this.signUpForm.value.password === this.signUpForm.value.repeatPassword){
      const user = {
        username: this.signUpForm.value.username,
        password: this. signUpForm.value.password
      };
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    }
  }
}

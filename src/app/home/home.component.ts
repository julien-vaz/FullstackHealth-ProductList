import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {};

  @Input() productName: string;
  
  productList = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkmsTa6gJXoQKbwWjhRlaqQlH44zQDzRxuMpW-pJQLqXG6q2oLavL4K3XzvlMUN5VGSQ&usqp=CAU",
      name: "Violão de cedro Kadence Slowhand 38″",
      price: "R$3000,00"
    },
    
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1mqx8EHXVjkA_KXdZfIcsmZ5r1Z5gUQyyA&usqp=CAU",
      name: "Guitarra de fibra de carbono Enya Nova Go (Preta)",
      price: "R$5000,00"
    }
  ]
  
  productsDisplayed = this.productList;
  
  search() {
    this.productsDisplayed = this.productList.filter((product) => product.name.includes(this.productName));      
    }

  goToLogin(){
    this.router.navigate(["/login"]);
  }
  }

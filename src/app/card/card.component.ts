import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: {img: string, name: string, price: string};
}

import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CategoriesComponent} from "./categories/categories.component";
import {ProvidersComponent} from "./providers/providers.component";

@Component({
  selector: 'app-slots',
  standalone: true,
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
  imports: [
    RouterOutlet,
    CategoriesComponent,
    ProvidersComponent
  ]
})
export class SlotsComponent {

}

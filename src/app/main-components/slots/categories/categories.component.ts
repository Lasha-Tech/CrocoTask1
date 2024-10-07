import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MenuItem} from "../../../shared/menu-item.module";
import {Subscription} from "rxjs";
import {ApiService} from "../../../shared/api.service";

@Component({
  selector: 'app-categories',
  standalone: true,
    imports: [
      CommonModule,
      RouterLink,
      RouterLinkActive,
    ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})

export class CategoriesComponent implements OnInit, OnDestroy {
  menu!: {name: string, svgPath: string, routePath: string, gamesCount: number}[];
  apiData!: Subscription;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    let gamesArr;
    this.apiData = this.apiService.getCategories().subscribe(api => {
      gamesArr = api.data.filter((data: any) => {
        return data.name === "პოპულარული მთავარზე / ვები" || data.name === "ახალი თამაშები" || data.name === "BUY BONUS"
      })

      this.menu = [
        new MenuItem('Top Slots', 'assets/top-slots-icon.svg', 'top-slots', gamesArr[0].games.length),
        new MenuItem('New Games', 'assets/new-games-icon.svg', 'new-games', gamesArr[2].games.length),
        new MenuItem('Buy Bonus', 'assets/buy-bonus-icon.svg', 'buy-bonus', gamesArr[3].games.length),
      ];
    })
  }

   ngOnDestroy() {
    this.apiData.unsubscribe();
  }
}


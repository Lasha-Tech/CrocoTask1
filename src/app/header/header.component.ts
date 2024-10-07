import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MenuService} from "./menu.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menu: {name: string, svgPath: string, routePath: string, gamesCount: number}[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menu = this.menuService.menuService;
  }
}

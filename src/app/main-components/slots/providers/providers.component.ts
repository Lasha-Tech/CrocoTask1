import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Router} from "express";
import {ApiService} from "../../../shared/api.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-providers',
  standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
    ],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss'
})

export class ProvidersComponent implements OnInit, OnDestroy {
  providersSubscription!: Subscription;
  providers: any[] = [];
  visibleProviders: any[] = [];
  extraProviders: any[][] = [];
  screenWidth: number = 0;
  showAll: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.providersSubscription = this.apiService.getProviders().subscribe(api => {
      this.providers = api.data;
      this.onResize();
    });

    this.onResize();
  }

  ngOnDestroy() {
    this.providersSubscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any): void {
    this.screenWidth = window.innerWidth;
    this.updateVisibleProviders();
  }

  updateVisibleProviders(): void {
    const baseTabs = 2;
    const additionalTabThreshold = 100;
    const extraTabs = Math.floor((this.screenWidth - 1000) / additionalTabThreshold);
    const totalVisibleTabs = baseTabs + Math.max(0, extraTabs);

    this.visibleProviders = this.providers.slice(0, totalVisibleTabs);
    this.splitExtraProviders(totalVisibleTabs);
  }

  splitExtraProviders(startIndex: number): void {
    const lineMaxTabs = 40;
    this.extraProviders = [];
    let currentLine = [];

    for (let i = startIndex; i < this.providers.length; i++) {
      currentLine.push(this.providers[i]);

      if (currentLine.length === lineMaxTabs) {
        this.extraProviders.push(currentLine);
        currentLine = [];
      }
    }

    if (currentLine.length) {
      this.extraProviders.push(currentLine);
    }
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }
}



import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ApiService} from "../../../shared/api.service";
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-slot-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot-list.component.html',
  styleUrl: './slot-list.component.scss'
})
export class SlotListComponent implements OnInit, OnDestroy {
  slotsSubscription!: Subscription;
  slots!: any;
  category: boolean = true;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.slotsSubscription = this.apiService.getCategories().subscribe(api => {
      const filtered = api.data.filter((slot: any) => {
        return slot.name === 'პოპულარული მთავარზე / ვები'
      })
      this.slots = filtered[0].games
    })

    this.activatedRoute.params.subscribe(params => {
      if(params['category'] === 'new-games'){
        this.category = true;
        this.slotsSubscription = this.apiService.getCategories().subscribe(api => {
          const filtered = api.data.filter((slot: any) => {
            return slot.name === 'ახალი თამაშები'
          })
          this.slots = filtered[0].games;
        })
      } else if(params['category'] === 'buy-bonus'){
        this.category = true;
        this.slotsSubscription = this.apiService.getCategories().subscribe(api => {
          const filtered = api.data.filter((slot: any) => {
            return slot.name === 'BUY BONUS'
          })
          this.slots = filtered[1].games;
        })
      } else if(params['category'] === 'top-slots'){
        this.category = true;
        this.slotsSubscription = this.apiService.getCategories().subscribe(api => {
          const filtered = api.data.filter((slot: any) => {
            return slot.name === 'პოპულარული მთავარზე / ვები'
          })
          this.slots = filtered[0].games;
        })
      } else {
        this.apiService.getSlotsByProviders().subscribe(api => {
          this.category = false;
          const filtered = api.data.filter((slot: any) => {
            return slot.provider === params['category'];
          })
          this.slots = filtered[0].games;
        })
      }
    })
  }

  ngOnDestroy() {
    this.slotsSubscription.unsubscribe()
  }
}

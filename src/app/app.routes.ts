import { Routes } from '@angular/router';
import {SlotsComponent} from "./main-components/slots/slots.component";
import {CasinoComponent} from "./main-components/casino/casino.component";
import {SportComponent} from "./main-components/sport/sport.component";
import {LiveComponent} from "./main-components/live/live.component";
import {SlotListComponent} from "./main-components/slots/slot-list/slot-list.component";

export const routes: Routes = [
  {path: '', redirectTo: 'slots', pathMatch: "full"},
  {path: 'slots', component: SlotsComponent, children: [
      {path: '', redirectTo: 'top-slots', pathMatch: 'full'},
      {path: ':category', component: SlotListComponent},
    ]
  },
  {path: 'casino', component: CasinoComponent},
  {path: 'sport', component: SportComponent},
  {path: 'live', component: LiveComponent},
];

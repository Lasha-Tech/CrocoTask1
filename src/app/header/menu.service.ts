import {Injectable} from "@angular/core";
import {MenuItem} from "../shared/menu-item.module";

@Injectable({ providedIn: 'root' })

export class MenuService {
  menuService: {name: string, svgPath: string, routePath: string, gamesCount: number}[] = [
    new MenuItem('sport', 'assets/sport-icon.svg', 'sport', 1),
    new MenuItem('live', 'assets/live-icon.svg', 'live', 1),
    new MenuItem('slots', 'assets/slots-icon.svg', 'slots', 1),
    new MenuItem('casino', 'assets/casino-icon.svg', 'casino', 1),
  ]
}

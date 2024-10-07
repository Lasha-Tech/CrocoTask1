import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })

export class ApiService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get('https://cms.crocobet.com/integrations/v2/slot/categories?include=games');
  }

  getProviders(): Observable<any> {
    return this.http.get('https://cms.crocobet.com/integrations?type=slot&platform=desktop');
  }

  getSlotsByProviders(): Observable<any> {
    return this.http.get('https://cms.crocobet.com/integrations/v2/slot/providers?include=games');
  }
}

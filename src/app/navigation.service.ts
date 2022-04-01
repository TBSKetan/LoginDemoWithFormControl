import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navigationData: any;

  constructor() {}

  setNavigationData(navData) {
    this.navigationData = navData;
  }
  getNavigationData() {
    return this.navigationData;
  }
}

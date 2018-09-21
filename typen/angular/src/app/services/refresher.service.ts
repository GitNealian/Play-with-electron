import { Injectable, OnInit, ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefresherService {
  changeDetectors: ChangeDetectorRef[];
  constructor() { 
    this.changeDetectors = [];
  }
  add(detector: ChangeDetectorRef) {
    this.changeDetectors.push(detector);
  }

  refresh() {
    this.changeDetectors.forEach(element => {
      element.detectChanges();
    });
  }
}

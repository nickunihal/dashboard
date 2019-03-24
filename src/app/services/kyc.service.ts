import { Injectable } from '@angular/core';
import { Observable ,  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KycService {
  private viewActive = new Subject<boolean>();
  private stage = new Subject<Number>();
  private authorizedRep = new Subject<boolean>();
  stage$ = this.stage.asObservable();
  authorizedRep$ = this.stage.asObservable();
  viewActive$ = this.stage.asObservable();
  constructor() { }

  updateStage(stage) {
    this.stage.next(stage);
  }

  updateViewActive(active) {
    this.viewActive.next(active);
  }

  resetAll() {
    this.viewActive.next(false);
    this.stage.next(1);
    this.authorizedRep.next(false);

  }

  initAll() {
    this.viewActive.next(true);
    this.stage.next(1);
    this.authorizedRep.next(false);
  }
}

import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestCancelerService {

  constructor() { }

  // call next() on this subject to cancel all http requests
  private cancelerSubject = new Subject();
  /**
   * To be called by something in the app
   * (probably by a router event listener
   */
  cancelAllPendingRequests() {
    this.cancelerSubject.next();
  }

  get cancelerObservable() {
    return this.cancelerSubject.asObservable();
  }
}

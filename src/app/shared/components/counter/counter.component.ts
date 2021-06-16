import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  nbMsTotal = 0;
  startMs = new Date().getTime();

  lastRefreshTime = new Date().getTime();

  constructor(private ngZone: NgZone, private cdr:ChangeDetectorRef) {
  }

  get nbScTotal() {
    return (this.nbMsTotal / 1000).toFixed(1);
  }

  ngOnInit(): void {

    // this.versionOutsideAngular();
    this.versionDetach();

  }

  private algo(){
    setInterval(() => {
      const currentMs = new Date().getTime();
      this.nbMsTotal = currentMs - this.startMs;

      if (currentMs - this.lastRefreshTime >= 2000) {
        this.detectChange();
        this.lastRefreshTime = currentMs;
      }
    }, 100);
  }

  private versionOutsideAngular() {

    this.ngZone.runOutsideAngular(() => {
      this.algo();
    })
  }

  private versionDetach() {
    this.cdr.detach();
    this.algo();
  }

  private detectChange() {
    // this.ngZone.run(()=>{})
    // ou
    this.cdr.detectChanges();
  }
}

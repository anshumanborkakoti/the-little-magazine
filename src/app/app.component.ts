import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { WindowRef } from './reusable/window.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private swUpdate: SwUpdate,
    private window: WindowRef
  ) { }

  title = 'The Little Journal';

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (this.window.nativeWindow.confirm('New version available. Load New Version?')) {
          this.window.nativeWindow.location.reload();
        }
      });
    }
  }

  onActivate() {
    this.scrollTop();
  }

  private scrollTop() {
    let scrollToTop = this.window.nativeWindow.setInterval(() => {
      let pos = this.window.nativeWindow.scrollY;
      if (pos > 0) {
        this.window.nativeWindow.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        this.window.nativeWindow.clearInterval(scrollToTop);
      }
    }, 16);
  }
}

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
}

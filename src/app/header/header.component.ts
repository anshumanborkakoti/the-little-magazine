import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { WindowRef } from '../reusable/window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './util-modal.component.scss']
})
export class HeaderComponent implements OnInit {

  private deferredInstallPrompt: any = null;

  constructor(
    private window: WindowRef,
    private changeDetRef: ChangeDetectorRef
  ) { }

  hideModal = true;
  showA2hsIcon = false;

  headers: Array<{ label: string; route: string }> = [
    {
      label: 'Home',
      route: 'home'
    },
    {
      label: 'Issues',
      route: '/issues'
    },
    {
      label: 'Categories',
      route: '/categories'
    },
    {
      label: 'About Us',
      route: '/aboutus'
    },
    {
      label: 'Process',
      route: '/submissions'
    },
    {
      label: 'Guidelines',
      route: '/guidelines'
    },
    {
      label: 'Masthead',
      route: '/masthead'
    },
    {
      label: 'Contact Us',
      route: '/contactus'
    }
  ];

  openModal() {
    this.hideModal = false;
  }

  closeModal() {
    this.hideModal = true;
  }
  ngOnInit() {
    if (this.window.nativeWindow.matchMedia('(display-mode: standalone)').matches) {
      // Already installed
      this.showA2hsIcon = false;
      return;
    } else {
      this.showA2hsIcon = true;
    }
    const saveBeforeInstallPromptEvent = (event: Event) => {
      event.preventDefault();
      this.deferredInstallPrompt = event;
      // Needs to install
      this.showA2hsIcon = true;
    };
    this.window.nativeWindow.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
    this.window.nativeWindow.addEventListener('appinstalled', () => { this.showA2hsIcon = false; this.changeDetRef.detectChanges(); });

  }


  async addToHomeScreen(event: Event) {
    event.preventDefault();
    try {
      this.deferredInstallPrompt.prompt();
      const userChoice = await this.deferredInstallPrompt.userChoice;
      if (userChoice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
        this.showA2hsIcon = true;
        this.changeDetRef.detectChanges();
      }
    } catch (error) {
      console.error(`A2HS failed. Reason: ${error}`);
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
  constructor() {}

  ngOnInit() {}
}

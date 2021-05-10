import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public open = false;

  public navItems: any[] = [
    {
      'name': 'HOME',
      'path': '#home'
    },
    {
      'name': 'INVENTORY',
      'path': '#inventory'
    },
    {
      'name': 'HISTORY',
      'path': '#history'
    },
    {
      'name': 'UNLOCK WALLET',
      'path': '#unlock'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

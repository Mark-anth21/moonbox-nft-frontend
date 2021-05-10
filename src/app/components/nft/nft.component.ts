import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {

  static readonly routeName: string = 'nft';

  constructor() { }

  ngOnInit(): void {
  }

}

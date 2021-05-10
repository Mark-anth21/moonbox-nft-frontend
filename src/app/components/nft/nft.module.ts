import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftComponent } from './nft.component';
import { PanelComponent } from './panel/panel.component';
import { HeaderModule } from './header/header.module';
import { CountdownModule } from 'ngx-countdown';
import { NgParticlesModule } from 'ng-particles';
import { NftRoutingModule } from './nft-routing.module';


@NgModule({
  declarations: [
    NftComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CountdownModule,
    NgParticlesModule,
    NftRoutingModule
  ]
})
export class NftModule { }

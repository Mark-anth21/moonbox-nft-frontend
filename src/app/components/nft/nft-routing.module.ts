
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NftComponent } from './nft.component';
import { AboutComponent } from './about/about.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
    {
        path: 'nft',
        component: NftComponent,
        children: [
          {
              path: 'about',
              component: AboutComponent
          },
          {
              path: 'panel',
              component: PanelComponent
          }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NftRoutingModule { }
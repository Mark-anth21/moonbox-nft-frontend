
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NftComponent } from './nft.component';
import { AboutComponent } from './about/about.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HistoryComponent } from './history/history.component';

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
            path: 'history',
            component: HistoryComponent
          },
          {
              path: 'inventory',
              component: InventoryComponent
          }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NftRoutingModule { }
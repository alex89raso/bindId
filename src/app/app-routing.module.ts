import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunnelComponent } from './clarity/funnel/funnel.component';
import { TypComponent } from './clarity/typ/typ.component';
import { VetrinaComponent } from './clarity/vetrina/vetrina.component';

const routes: Routes = [
  { path: 'vetrina', component: VetrinaComponent },
  { path: 'funnel', component: FunnelComponent },
  { path: 'typ', component: TypComponent },
  { path: '', redirectTo: '/vetrina', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

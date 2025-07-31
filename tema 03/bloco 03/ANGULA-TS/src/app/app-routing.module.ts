import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { telaimport1Component } from './telaimport1/tela1.component';
import { TelaboasvindasComponent } from './telaboasvindas/telaboasvindas.component';
import { telaimport2Component } from './telaimport2/tela2.component';


const routes: Routes = [
  { path: 'home', component: TelaboasvindasComponent },
  { path: 'telaimport1', component: telaimport1Component },
  { path: 'telaimport2', component: telaimport2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//
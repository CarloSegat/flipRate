import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TrickPageComponent } from '../trick-page/trick-page.component';

const routes: Routes = [
  {path: 'open-trick/:name', component: TrickPageComponent},
  {path: 'home', component: HomeComponent}
  ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRouterModule { }
// ,

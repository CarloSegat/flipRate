import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';
import { TrickInfoComponent } from '../shared/trick-info/trick-info.component';
import { HomeComponent } from '../home/home.component';
import { TrickInfoListComponent } from '../shared/trick-info-list/trick-info-list.component';

const routes: Routes = [
  {path: 'open-trick/:name', component: TrickInfoListComponent },
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

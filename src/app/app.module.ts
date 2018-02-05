import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRouterModule} from './router/app-router.module';
import { TrickInfoComponent } from './shared/trick-info/trick-info.component';
import { Chart, ChartModule } from 'ng2-chartjs2';
import { TrickInfoListComponent } from './shared/trick-info-list/trick-info-list.component';
import { TrickParentComponent } from './home/trick-icon/trick-parent.component';
import { TrickService } from './trick.service';
import { SpaceOutPipe } from './space-out.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrickParentComponent,
    TrickInfoComponent,
    TrickInfoListComponent,
    SpaceOutPipe
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ChartModule,
  ],
  exports: [ ChartModule],
  providers: [TrickService],
  bootstrap: [AppComponent]
})
export class AppModule { }

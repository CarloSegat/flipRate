import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRouterModule} from './router/app-router.module';
import { Chart, ChartModule } from 'ng2-chartjs2';
import { TrickParentComponent } from './home/trick-icon/trick-parent.component';
import { TrickService } from './trick.service';
import { SpaceOutPipe } from './space-out.pipe';
import { BackArrowComponent } from './back-arrow/back-arrow.component';
import { OverallComponent } from './specificTrick/overall/overall.component';
import { SpecificTrickComponent } from './specificTrick/specific-trick.component';
import { TrickInfoListComponent } from './specificTrick/trick-info-list/trick-info-list.component';
import { TrickInfoComponent } from './specificTrick/trick-info/trick-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrickParentComponent,
    SpaceOutPipe,
    BackArrowComponent,
    OverallComponent,
    SpecificTrickComponent,
    TrickInfoListComponent,
    TrickInfoComponent
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

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
import { TrickPageComponent } from './trick-page/trick-page.component';
import { ButtonsComponent } from './trick-page/buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrickParentComponent,
    SpaceOutPipe,
    BackArrowComponent,
    TrickPageComponent,
    ButtonsComponent
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

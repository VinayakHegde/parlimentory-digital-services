import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventListService } from './services/event-list/event-list.service';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { DialogComponent } from './dialog/dialog.component';
import { MemberDetailsService } from './services/member-details/member-details.service';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CalendarService } from './services/calendar-service/calendar-service.service';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventCardComponent,
    FormatDatePipe,
    FormatTimePipe,
    DialogComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]),
    DateInputsModule
  ],
  providers: [EventListService, MemberDetailsService, CalendarService],
  bootstrap: [AppComponent],
  exports: [FormatDatePipe, FormatTimePipe]
})
export class AppModule { }

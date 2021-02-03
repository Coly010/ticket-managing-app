import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HotToastModule } from '@ngneat/hot-toast';

import { FeatTicketsModule } from './tickets';
import { UserFeatureModule } from './users/feature';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    HotToastModule.forRoot(),
    MatToolbarModule,
    FeatTicketsModule,
    UserFeatureModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HotToastModule } from '@ngneat/hot-toast';

import { AppComponent } from './app.component';
import { FeatTicketsModule } from './tickets';
import { UserFeatureModule } from './users/feature';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, { metaReducers }),
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

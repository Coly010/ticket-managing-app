import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { UserEffects, userFeatureKey, userReducers } from '../data-access';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeatureKey, userReducers),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserFeatureModule {}

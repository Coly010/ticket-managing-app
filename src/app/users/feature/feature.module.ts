import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserEffects, userFeatureKey, userReducers } from '../data-access';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeatureKey, userReducers),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserFeatureModule {}

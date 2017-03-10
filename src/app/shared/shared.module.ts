import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './components/base-layout';

@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BaseLayoutComponent
  ]
})
export class SharedModule {}

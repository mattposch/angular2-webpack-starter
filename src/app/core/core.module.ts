import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';

import { RequestService } from './services/request.service';

@NgModule({
  providers: [
    RequestService
  ],
  imports: [
    CommonModule,
    HttpModule,
    Ng2Webstorage
  ],
})
export class CoreModule {}

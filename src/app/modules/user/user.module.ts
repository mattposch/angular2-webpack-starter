import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';

import { UserService } from './service/user.service';

@NgModule({
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    HttpModule,
    Ng2Webstorage
  ],
})
export class UserModule {}

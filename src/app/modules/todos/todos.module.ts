import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';

import { TodosService } from './service/todos.service';

@NgModule({
  providers: [
    TodosService
  ],
  imports: [
    CommonModule,
    HttpModule,
    Ng2Webstorage
  ],
})
export class TodosModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonDropdownService } from './service/person-dropdown.service';
import { LogService } from './service/log.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [PersonDropdownService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

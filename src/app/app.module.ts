import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ActionComponent } from './components/action/action.component';

import { ParticlesModule } from 'angular-particle';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

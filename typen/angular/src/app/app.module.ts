import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ElModule } from 'element-angular/release/element-angular.module';
import { TypenHeaderComponent } from './typen-header/typen-header.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { TypeboardComponent } from './typeboard/typeboard.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TypenHeaderComponent,
    SidepanelComponent,
    TypeboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

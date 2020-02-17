import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import bootstrap from "bootstrap";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: routingComponents,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatBadgeModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [routingComponents[0]]
})
export class AppModule { }

import 'hammerjs'
import 'firebase/storage'; // global firebase storage javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/company.service';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { ContactService } from './contact/contact.service';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

// Initialize Firebase
const firabaseConfig = {
  apiKey: 'AIzaSyCR52-p95gf2tH9H6z4MJtBmxuO8Ad3HJ0',
  authDomain: 'angularcrm-f5b82.firebaseapp.com',
  databaseURL: 'https://angularcrm-f5b82.firebaseio.com',
  projectId: 'angularcrm-f5b82',
  storageBucket: 'angularcrm-f5b82.appspot.com',
  messagingSenderId: '379020019999'
};

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent,
    ContactEditComponent,
    ContactListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firabaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule

  ],
  providers: [AuthGuard, CompanyService, ContactService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

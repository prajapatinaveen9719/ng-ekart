import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OneWayStringInterpolationComponent } from './one-way-string-interpolation/one-way-string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ngdirectives } from './ngdirectives/ngdirectives.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent-to-child/parent/parent.component';
import { ChildComponent } from './parent-to-child/child/child.component';
import { ParentCtpComponent } from './child-to-parent/parent-ctp/parent-ctp.component';
import { ChildCtpComponent } from './child-to-parent/child-ctp/child-ctp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OneWayStringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    ngdirectives,
    ParentComponent,
    ChildComponent,
    ParentCtpComponent,
    ChildCtpComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

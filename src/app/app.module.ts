import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule, routingComponents } from './app.routes';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { ProjectDetailsComponent } from './author/project-details/project-details.component';
import { TechnologiesComponent } from './home/technologies/technologies.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    ProjectDetailsComponent,
    TechnologiesComponent

  ],
  imports: [
    AccordionModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

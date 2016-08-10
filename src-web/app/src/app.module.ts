import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent }  from './app.component';
import { routing,
    appRoutingProviders } from './app.routing';

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component";
import {AboutSite} from "./aboutSite/aboutSite.component";
import {ProfileFeedComponent} from "./profileFeed/profileFeed.component";
import {VisitedProfileComponent} from "./viewProfile/viewProfile.component";
import {QuestionComponent} from "./questions/question.component";
import {QuestionAskComponent} from "./questionAsk/questionAsk.component";
import {QuestionAskedComponent} from "./questionAsked/questionAsked.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        AboutSite,
        ProfileFeedComponent,
        VisitedProfileComponent,
        QuestionComponent,
        QuestionAskComponent,
        QuestionAskedComponent
    ],
    providers: [
      appRoutingProviders
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";


import { routing,
    appRoutingProviders } from './app.routing';


import {AboutSite} from "./aboutSite/aboutSite.component";
import {AddInterestsComponent} from "./addInterests/addInterests.component";
import {AppComponent}  from './app.component';
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./pageNotFound/pageNotFound.component";
import {ProfileFeedComponent} from "./profileFeed/profileFeed.component";
import {QuestionComponent} from "./questions/question.component";
import {QuestionAskComponent} from "./questionAsk/questionAsk.component";
import {QuestionAskedComponent} from "./questionAsked/questionAsked.component";
import {VisitedProfileComponent} from "./viewProfile/viewProfile.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AboutSite,
        AddInterestsComponent,
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        ProfileFeedComponent,
        QuestionComponent,
        QuestionAskComponent,
        QuestionAskedComponent,
        VisitedProfileComponent
    ],
    providers: [
      appRoutingProviders
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

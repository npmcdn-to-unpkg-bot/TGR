import { Routes, RouterModule }   from '@angular/router';


import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component";
import { AboutSite } from "./aboutSite/aboutSite.component";
import { ProfileFeedComponent } from "./profileFeed/profileFeed.component";
import { VisitedProfileComponent } from "./viewProfile/viewProfile.component";
import { QuestionComponent } from "./questions/question.component";
import { QuestionAskComponent } from "./questionAsk/questionAsk.component";
import { QuestionAskedComponent } from "./questionAsked/questionAsked.component";

//place routes in alphabetical order
const appRoutes: Routes = [
    {path: '', component: HomeComponent,  pathMatch: 'full'},
    {path: 'about', component: AboutSite},
    {path: 'profile-feed', component: ProfileFeedComponent},
    {path: 'question', component: QuestionComponent},
    {path: 'question/ask', component: QuestionAskComponent},
    {path: 'question/asked', component: QuestionAskedComponent},
    {path: 'view-profile', component: VisitedProfileComponent},
    {path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
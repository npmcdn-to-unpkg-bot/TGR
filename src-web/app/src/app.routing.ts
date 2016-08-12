import { Routes, RouterModule }   from '@angular/router';


import {AboutSite} from "./aboutSite/aboutSite.component";
import {AddInterestsComponent} from "./addInterests/addInterests.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./pageNotFound/pageNotFound.component";
import {ProfileFeedComponent} from "./profileFeed/profileFeed.component";
import {QuestionComponent} from "./questions/question.component";
import {QuestionAskComponent} from "./questionAsk/questionAsk.component";
import {QuestionAskedComponent} from "./questionAsked/questionAsked.component";
import {VisitedProfileComponent} from "./viewProfile/viewProfile.component";

//place routes in alphabetical order
const appRoutes: Routes = [
    {path: '', component: HomeComponent,  pathMatch: 'full'},
    {path: 'profile/interests', component: AddInterestsComponent},
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
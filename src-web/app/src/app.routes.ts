import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component";
import {AboutSite} from "./aboutSite/aboutSite.component";
import {HelpComponent} from "./help/help.component";
import {ProfileFeedComponent} from "./profileFeed/profileFeed.component";
import {VisitedProfileComponent} from "./viewProfile/viewProfile.component";

//place routes in alphabetical order
const routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutSite},
    {path: 'help', component: HelpComponent},
    {path: 'profile-feed', component: ProfileFeedComponent},
    {path: 'view-profile', component: VisitedProfileComponent},
    {path: '**', component: PageNotFoundComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];

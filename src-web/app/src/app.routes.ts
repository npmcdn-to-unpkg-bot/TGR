import { provideRouter, RouterConfig } from '@angular/router';
import { SignUpComponent } from "./signup/signup.component";
import { SignInComponent } from "./signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component";


const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'login', component: SignInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: '**', component: PageNotFoundComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];

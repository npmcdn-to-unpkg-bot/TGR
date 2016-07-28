/// <reference path="../typings.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';


//main component
import { AppComponent } from './src/app.component';

//router
import {appRouterProviders} from "./src/app.routes";

//services
import {Auth} from "./src/services/auth.service";


bootstrap(AppComponent, [
    appRouterProviders,
    Auth
])
    .catch(err => console.error(err));
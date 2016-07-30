/// <reference path="../typings.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

//main component
import { AppComponent } from './src/app.component';

//router
import {appRouterProviders} from "./src/app.routes";

//services



bootstrap(AppComponent, [
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms()
])
    .catch(err => console.error(err));
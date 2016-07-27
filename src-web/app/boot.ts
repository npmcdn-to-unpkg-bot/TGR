/// <reference path="../typings.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';


//main component
import { AppComponent } from './src/app.component';

//services
import {Auth} from "./src/services/auth.service";



bootstrap(AppComponent, [
    Auth
]);
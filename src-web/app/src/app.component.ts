import {Component} from "@angular/core";
import {Auth} from "./services/auth.service";
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
    moduleId: module.id,
    providers: [ Auth ],
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(private auth: Auth) {}
}

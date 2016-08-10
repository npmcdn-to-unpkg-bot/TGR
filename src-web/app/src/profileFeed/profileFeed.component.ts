import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, RouterLink, Router} from "@angular/router";

//custom components
import {ProfileInfoComponent} from "../profileInfo/profileInfo.component";

@Component({
    moduleId: module.id,
    selector: 'profile-feed',
    templateUrl: 'profileFeed.component.html',
    styleUrls: ['profileFeed.component.css'],
    directives: [
        ProfileInfoComponent,
        RouterLink,
        ROUTER_DIRECTIVES
    ]
})
export class ProfileFeedComponent {

}
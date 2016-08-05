import {Component, ViewContainerRef} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {CORE_DIRECTIVES} from "@angular/common";
import {FORM_DIRECTIVES} from "@angular/forms";
import {NavigationComponent} from "./navigation/navigation.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, FooterComponent, NavigationComponent]
})
export class AppComponent {
    public viewContainerRef : ViewContainerRef;
    public constructor(viewContainerRef:ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}

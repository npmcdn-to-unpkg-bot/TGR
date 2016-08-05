import {Component, ViewChild} from "@angular/core";
import {CORE_DIRECTIVES} from '@angular/common';

import {ROUTER_DIRECTIVES} from "@angular/router";
import {BS_VIEW_PROVIDERS, MODAL_DIRECTIVES, ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {SignInComponent} from "../signin/signin.component";


@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    directives: [ROUTER_DIRECTIVES, MODAL_DIRECTIVES, CORE_DIRECTIVES, SignInComponent],
    viewProviders:[BS_VIEW_PROVIDERS],
})

export class NavigationComponent {
    @ViewChild('childModal') public childModal: ModalDirective;

    public showChildModal():void {
        this.childModal.show();
    }

    public hideChildModal():void {
        this.childModal.hide();
    }
}
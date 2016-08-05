import { Component } from '@angular/core';
import { CORE_DIRECTIVES} from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';
import {ACCORDION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {SignInComponent} from "../signin/signin.component";
import {SignUpComponent} from "../signup/signup.component";
import {ForgotPasswordComponent} from "../forgotPassword/forgotPassword.component";



@Component({
    moduleId: module.id,
    selector: 'auth-accordion',
    templateUrl: 'authAccordion.component.html',
    directives: [ ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, SignInComponent, SignUpComponent, ForgotPasswordComponent]
})
export class AuthAccordionComponent {
    public oneAtATime:boolean = true;

    public status:Object = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

}
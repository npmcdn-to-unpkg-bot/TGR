"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
//custom component
var signin_component_1 = require("../signin/signin.component");
var authAccordion_component_1 = require("../authenticationAccordian/authAccordion.component");
var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    NavigationComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], NavigationComponent.prototype, "childModal", void 0);
    NavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navigation',
            templateUrl: 'navigation.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, signin_component_1.SignInComponent, authAccordion_component_1.AuthAccordionComponent],
            viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFFbEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsOEJBQW9FLDZCQUE2QixDQUFDLENBQUE7QUFDbEcsa0JBQWtCO0FBQ2xCLGlDQUFnQyw0QkFBNEIsQ0FBQyxDQUFBO0FBQzdELHdDQUF1QyxvREFBb0QsQ0FBQyxDQUFBO0FBWTVGO0lBQUE7SUFVQSxDQUFDO0lBUFUsNENBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSw0Q0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQVJEO1FBQUMsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7OzJEQUFBO0lBVjVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdDQUFnQixFQUFFLHdCQUFlLEVBQUUsa0NBQWUsRUFBRSxnREFBc0IsQ0FBQztZQUUzRyxhQUFhLEVBQUMsQ0FBQyxpQ0FBaUIsQ0FBQztTQUNwQyxDQUFDOzsyQkFBQTtJQVlGLDBCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSwyQkFBbUIsc0JBVS9CLENBQUEiLCJmaWxlIjoic3JjL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEJTX1ZJRVdfUFJPVklERVJTLCBNT0RBTF9ESVJFQ1RJVkVTLCBNb2RhbERpcmVjdGl2ZSB9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcbi8vY3VzdG9tIGNvbXBvbmVudFxuaW1wb3J0IHsgU2lnbkluQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2F1dGhlbnRpY2F0aW9uQWNjb3JkaWFuL2F1dGhBY2NvcmRpb24uY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25hdmlnYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBNT0RBTF9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVMsIFNpZ25JbkNvbXBvbmVudCwgQXV0aEFjY29yZGlvbkNvbXBvbmVudF0sXG5cbiAgICB2aWV3UHJvdmlkZXJzOltCU19WSUVXX1BST1ZJREVSU10sXG59KVxuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCB7XG4gICAgQFZpZXdDaGlsZCgnY2hpbGRNb2RhbCcpIHB1YmxpYyBjaGlsZE1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcblxuICAgIHB1YmxpYyBzaG93Q2hpbGRNb2RhbCgpOnZvaWQge1xuICAgICAgICB0aGlzLmNoaWxkTW9kYWwuc2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlQ2hpbGRNb2RhbCgpOnZvaWQge1xuICAgICAgICB0aGlzLmNoaWxkTW9kYWwuaGlkZSgpO1xuICAgIH1cbn0iXX0=

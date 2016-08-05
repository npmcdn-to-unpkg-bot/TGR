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
var signin_component_1 = require("../signin/signin.component");
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
            directives: [router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES, signin_component_1.SignInComponent],
            viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUMsZUFBZSxDQUFDLENBQUE7QUFDbkQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFFaEQsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQsOEJBQWtFLDZCQUE2QixDQUFDLENBQUE7QUFDaEcsaUNBQThCLDRCQUE0QixDQUFDLENBQUE7QUFXM0Q7SUFBQTtJQVVBLENBQUM7SUFQVSw0Q0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLDRDQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBUkQ7UUFBQyxnQkFBUyxDQUFDLFlBQVksQ0FBQzs7MkRBQUE7SUFUNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsZ0NBQWdCLEVBQUUsd0JBQWUsRUFBRSxrQ0FBZSxDQUFDO1lBQ25GLGFBQWEsRUFBQyxDQUFDLGlDQUFpQixDQUFDO1NBQ3BDLENBQUM7OzJCQUFBO0lBWUYsMEJBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLDJCQUFtQixzQkFVL0IsQ0FBQSIsImZpbGUiOiJzcmMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtCU19WSUVXX1BST1ZJREVSUywgTU9EQUxfRElSRUNUSVZFUywgTW9kYWxEaXJlY3RpdmV9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcbmltcG9ydCB7U2lnbkluQ29tcG9uZW50fSBmcm9tIFwiLi4vc2lnbmluL3NpZ25pbi5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbmF2aWdhdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICduYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE1PREFMX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgU2lnbkluQ29tcG9uZW50XSxcbiAgICB2aWV3UHJvdmlkZXJzOltCU19WSUVXX1BST1ZJREVSU10sXG59KVxuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCB7XG4gICAgQFZpZXdDaGlsZCgnY2hpbGRNb2RhbCcpIHB1YmxpYyBjaGlsZE1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcblxuICAgIHB1YmxpYyBzaG93Q2hpbGRNb2RhbCgpOnZvaWQge1xuICAgICAgICB0aGlzLmNoaWxkTW9kYWwuc2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlQ2hpbGRNb2RhbCgpOnZvaWQge1xuICAgICAgICB0aGlzLmNoaWxkTW9kYWwuaGlkZSgpO1xuICAgIH1cbn0iXX0=

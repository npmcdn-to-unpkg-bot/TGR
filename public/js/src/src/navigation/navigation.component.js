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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFFbEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsOEJBQW9FLDZCQUE2QixDQUFDLENBQUE7QUFDbEcsaUNBQWdDLDRCQUE0QixDQUFDLENBQUE7QUFDN0Qsd0NBQXVDLG9EQUFvRCxDQUFDLENBQUE7QUFVNUY7SUFBQTtJQVVBLENBQUM7SUFQVSw0Q0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLDRDQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBUkQ7UUFBQyxnQkFBUyxDQUFDLFlBQVksQ0FBQzs7MkRBQUE7SUFUNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsZ0NBQWdCLEVBQUUsd0JBQWUsRUFBRSxrQ0FBZSxFQUFFLGdEQUFzQixDQUFDO1lBQzNHLGFBQWEsRUFBQyxDQUFDLGlDQUFpQixDQUFDO1NBQ3BDLENBQUM7OzJCQUFBO0lBWUYsMEJBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLDJCQUFtQixzQkFVL0IsQ0FBQSIsImZpbGUiOiJzcmMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQlNfVklFV19QUk9WSURFUlMsIE1PREFMX0RJUkVDVElWRVMsIE1vZGFsRGlyZWN0aXZlIH0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgU2lnbkluQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2F1dGhlbnRpY2F0aW9uQWNjb3JkaWFuL2F1dGhBY2NvcmRpb24uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICduYXZpZ2F0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJ25hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTU9EQUxfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBTaWduSW5Db21wb25lbnQsIEF1dGhBY2NvcmRpb25Db21wb25lbnRdLFxuICAgIHZpZXdQcm92aWRlcnM6W0JTX1ZJRVdfUFJPVklERVJTXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKCdjaGlsZE1vZGFsJykgcHVibGljIGNoaWxkTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xuXG4gICAgcHVibGljIHNob3dDaGlsZE1vZGFsKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY2hpbGRNb2RhbC5zaG93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVDaGlsZE1vZGFsKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY2hpbGRNb2RhbC5oaWRlKCk7XG4gICAgfVxufSJdfQ==

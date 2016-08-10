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
var router_1 = require("@angular/router");
//custom components
var profileInfo_component_1 = require("../profileInfo/profileInfo.component");
var ProfileFeedComponent = (function () {
    function ProfileFeedComponent() {
    }
    ProfileFeedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile-feed',
            templateUrl: 'profileFeed.component.html',
            styleUrls: ['profileFeed.component.css'],
            directives: [
                profileInfo_component_1.ProfileInfoComponent,
                router_1.RouterLink,
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileFeedComponent);
    return ProfileFeedComponent;
}());
exports.ProfileFeedComponent = ProfileFeedComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlRmVlZC9wcm9maWxlRmVlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBb0QsaUJBQWlCLENBQUMsQ0FBQTtBQUV0RSxtQkFBbUI7QUFDbkIsc0NBQW1DLHNDQUFzQyxDQUFDLENBQUE7QUFhMUU7SUFBQTtJQUVBLENBQUM7SUFiRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxVQUFVLEVBQUU7Z0JBQ1IsNENBQW9CO2dCQUNwQixtQkFBVTtnQkFDViwwQkFBaUI7YUFDcEI7U0FDSixDQUFDOzs0QkFBQTtJQUdGLDJCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSw0QkFBb0IsdUJBRWhDLENBQUEiLCJmaWxlIjoic3JjL3Byb2ZpbGVGZWVkL3Byb2ZpbGVGZWVkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyTGluaywgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbi8vY3VzdG9tIGNvbXBvbmVudHNcbmltcG9ydCB7UHJvZmlsZUluZm9Db21wb25lbnR9IGZyb20gXCIuLi9wcm9maWxlSW5mby9wcm9maWxlSW5mby5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3Byb2ZpbGUtZmVlZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdwcm9maWxlRmVlZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3Byb2ZpbGVGZWVkLmNvbXBvbmVudC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIFByb2ZpbGVJbmZvQ29tcG9uZW50LFxuICAgICAgICBSb3V0ZXJMaW5rLFxuICAgICAgICBST1VURVJfRElSRUNUSVZFU1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZUZlZWRDb21wb25lbnQge1xuXG59Il19

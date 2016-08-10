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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./pageNotFound/pageNotFound.component");
var aboutSite_component_1 = require("./aboutSite/aboutSite.component");
var profileFeed_component_1 = require("./profileFeed/profileFeed.component");
var viewProfile_component_1 = require("./viewProfile/viewProfile.component");
var question_component_1 = require("./questions/question.component");
var questionAsk_component_1 = require("./questionAsk/questionAsk.component");
var questionAsked_component_1 = require("./questionAsked/questionAsked.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                pageNotFound_component_1.PageNotFoundComponent,
                aboutSite_component_1.AboutSite,
                profileFeed_component_1.ProfileFeedComponent,
                viewProfile_component_1.VisitedProfileComponent,
                question_component_1.QuestionComponent,
                questionAsk_component_1.QuestionAskComponent,
                questionAsked_component_1.QuestionAskedComponent
            ],
            providers: [
                app_routing_1.appRoutingProviders
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsc0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFFM0MsOEJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsNEJBQytCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLCtCQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELHVDQUFzQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzlFLG9DQUF3QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzFELHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3pFLHNDQUFzQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzVFLG1DQUFnQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2pFLHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3pFLHdDQUFxQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBMEIvRTtJQUFBO0lBQXlCLENBQUM7SUF4QjFCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGdDQUFhO2dCQUNiLG1CQUFXO2dCQUNYLHFCQUFPO2FBQ1Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsOENBQXFCO2dCQUNyQiwrQkFBUztnQkFDVCw0Q0FBb0I7Z0JBQ3BCLCtDQUF1QjtnQkFDdkIsc0NBQWlCO2dCQUNqQiw0Q0FBb0I7Z0JBQ3BCLGdEQUFzQjthQUN6QjtZQUNELFNBQVMsRUFBRTtnQkFDVCxpQ0FBbUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtTQUNKLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJzcmMvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IHJvdXRpbmcsXG4gICAgYXBwUm91dGluZ1Byb3ZpZGVycyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZU5vdEZvdW5kL3BhZ2VOb3RGb3VuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7QWJvdXRTaXRlfSBmcm9tIFwiLi9hYm91dFNpdGUvYWJvdXRTaXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9maWxlRmVlZENvbXBvbmVudH0gZnJvbSBcIi4vcHJvZmlsZUZlZWQvcHJvZmlsZUZlZWQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Zpc2l0ZWRQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi92aWV3UHJvZmlsZS92aWV3UHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7UXVlc3Rpb25Db21wb25lbnR9IGZyb20gXCIuL3F1ZXN0aW9ucy9xdWVzdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UXVlc3Rpb25Bc2tDb21wb25lbnR9IGZyb20gXCIuL3F1ZXN0aW9uQXNrL3F1ZXN0aW9uQXNrLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtRdWVzdGlvbkFza2VkQ29tcG9uZW50fSBmcm9tIFwiLi9xdWVzdGlvbkFza2VkL3F1ZXN0aW9uQXNrZWQuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgcm91dGluZ1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LFxuICAgICAgICBBYm91dFNpdGUsXG4gICAgICAgIFByb2ZpbGVGZWVkQ29tcG9uZW50LFxuICAgICAgICBWaXNpdGVkUHJvZmlsZUNvbXBvbmVudCxcbiAgICAgICAgUXVlc3Rpb25Db21wb25lbnQsXG4gICAgICAgIFF1ZXN0aW9uQXNrQ29tcG9uZW50LFxuICAgICAgICBRdWVzdGlvbkFza2VkQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIGFwcFJvdXRpbmdQcm92aWRlcnNcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==

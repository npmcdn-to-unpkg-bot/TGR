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
var app_routing_1 = require('./app.routing');
var aboutSite_component_1 = require("./aboutSite/aboutSite.component");
var addInterests_component_1 = require("./addInterests/addInterests.component");
var app_component_1 = require('./app.component');
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./pageNotFound/pageNotFound.component");
var profileFeed_component_1 = require("./profileFeed/profileFeed.component");
var question_component_1 = require("./questions/question.component");
var questionAsk_component_1 = require("./questionAsk/questionAsk.component");
var questionAsked_component_1 = require("./questionAsked/questionAsked.component");
var viewProfile_component_1 = require("./viewProfile/viewProfile.component");
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
                aboutSite_component_1.AboutSite,
                addInterests_component_1.AddInterestsComponent,
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                pageNotFound_component_1.PageNotFoundComponent,
                profileFeed_component_1.ProfileFeedComponent,
                question_component_1.QuestionComponent,
                questionAsk_component_1.QuestionAskComponent,
                questionAsked_component_1.QuestionAskedComponent,
                viewProfile_component_1.VisitedProfileComponent
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsc0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFHM0MsNEJBQytCLGVBQWUsQ0FBQyxDQUFBO0FBRy9DLG9DQUF3QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzFELHVDQUFvQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzVFLDhCQUE0QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzlDLCtCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELHVDQUFvQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzVFLHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3pFLG1DQUFnQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2pFLHNDQUFtQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3pFLHdDQUFxQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQy9FLHNDQUFzQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBMkI1RTtJQUFBO0lBQXlCLENBQUM7SUF6QjFCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGdDQUFhO2dCQUNiLG1CQUFXO2dCQUNYLHFCQUFPO2FBQ1Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsK0JBQVM7Z0JBQ1QsOENBQXFCO2dCQUNyQiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYiw4Q0FBcUI7Z0JBQ3JCLDRDQUFvQjtnQkFDcEIsc0NBQWlCO2dCQUNqQiw0Q0FBb0I7Z0JBQ3BCLGdEQUFzQjtnQkFDdEIsK0NBQXVCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGlDQUFtQjthQUNwQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1NBQ0osQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6InNyYy9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cblxuaW1wb3J0IHsgcm91dGluZyxcbiAgICBhcHBSb3V0aW5nUHJvdmlkZXJzIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5cblxuaW1wb3J0IHtBYm91dFNpdGV9IGZyb20gXCIuL2Fib3V0U2l0ZS9hYm91dFNpdGUuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkZEludGVyZXN0c0NvbXBvbmVudH0gZnJvbSBcIi4vYWRkSW50ZXJlc3RzL2FkZEludGVyZXN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQYWdlTm90Rm91bmRDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VOb3RGb3VuZC9wYWdlTm90Rm91bmQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2ZpbGVGZWVkQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9maWxlRmVlZC9wcm9maWxlRmVlZC5jb21wb25lbnRcIjtcbmltcG9ydCB7UXVlc3Rpb25Db21wb25lbnR9IGZyb20gXCIuL3F1ZXN0aW9ucy9xdWVzdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UXVlc3Rpb25Bc2tDb21wb25lbnR9IGZyb20gXCIuL3F1ZXN0aW9uQXNrL3F1ZXN0aW9uQXNrLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtRdWVzdGlvbkFza2VkQ29tcG9uZW50fSBmcm9tIFwiLi9xdWVzdGlvbkFza2VkL3F1ZXN0aW9uQXNrZWQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Zpc2l0ZWRQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi92aWV3UHJvZmlsZS92aWV3UHJvZmlsZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICByb3V0aW5nXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQWJvdXRTaXRlLFxuICAgICAgICBBZGRJbnRlcmVzdHNDb21wb25lbnQsXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LFxuICAgICAgICBQcm9maWxlRmVlZENvbXBvbmVudCxcbiAgICAgICAgUXVlc3Rpb25Db21wb25lbnQsXG4gICAgICAgIFF1ZXN0aW9uQXNrQ29tcG9uZW50LFxuICAgICAgICBRdWVzdGlvbkFza2VkQ29tcG9uZW50LFxuICAgICAgICBWaXNpdGVkUHJvZmlsZUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBhcHBSb3V0aW5nUHJvdmlkZXJzXG4gICAgXSxcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=

"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./pageNotFound/pageNotFound.component");
var aboutSite_component_1 = require("./aboutSite/aboutSite.component");
var profileFeed_component_1 = require("./profileFeed/profileFeed.component");
var viewProfile_component_1 = require("./viewProfile/viewProfile.component");
var question_component_1 = require("./questions/question.component");
var questionAsk_component_1 = require("./questionAsk/questionAsk.component");
var questionAsked_component_1 = require("./questionAsked/questionAsked.component");
//place routes in alphabetical order
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'about', component: aboutSite_component_1.AboutSite },
    { path: 'profile-feed', component: profileFeed_component_1.ProfileFeedComponent },
    { path: 'question', component: question_component_1.QuestionComponent },
    { path: 'question/ask', component: questionAsk_component_1.QuestionAskComponent },
    { path: 'question/asked', component: questionAsked_component_1.QuestionAskedComponent },
    { path: 'view-profile', component: viewProfile_component_1.VisitedProfileComponent },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFHekQsK0JBQThCLHVCQUF1QixDQUFDLENBQUE7QUFDdEQsdUNBQXNDLHVDQUF1QyxDQUFDLENBQUE7QUFDOUUsb0NBQTBCLGlDQUFpQyxDQUFDLENBQUE7QUFDNUQsc0NBQXFDLHFDQUFxQyxDQUFDLENBQUE7QUFDM0Usc0NBQXdDLHFDQUFxQyxDQUFDLENBQUE7QUFDOUUsbUNBQWtDLGdDQUFnQyxDQUFDLENBQUE7QUFDbkUsc0NBQXFDLHFDQUFxQyxDQUFDLENBQUE7QUFDM0Usd0NBQXVDLHlDQUF5QyxDQUFDLENBQUE7QUFFakYsb0NBQW9DO0FBQ3BDLElBQU0sU0FBUyxHQUFXO0lBQ3RCLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ3hELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsK0JBQVMsRUFBQztJQUNyQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFDO0lBQ3ZELEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7SUFDaEQsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBQztJQUN2RCxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUM7SUFDM0QsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSwrQ0FBdUIsRUFBQztJQUMxRCxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFDO0NBQ2pELENBQUM7QUFFVywyQkFBbUIsR0FBVSxFQUV6QyxDQUFDO0FBRVcsZUFBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hcHAucm91dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlTm90Rm91bmQvcGFnZU5vdEZvdW5kLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWJvdXRTaXRlIH0gZnJvbSBcIi4vYWJvdXRTaXRlL2Fib3V0U2l0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2ZpbGVGZWVkQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZUZlZWQvcHJvZmlsZUZlZWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBWaXNpdGVkUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdQcm9maWxlL3ZpZXdQcm9maWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUXVlc3Rpb25Db21wb25lbnQgfSBmcm9tIFwiLi9xdWVzdGlvbnMvcXVlc3Rpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBRdWVzdGlvbkFza0NvbXBvbmVudCB9IGZyb20gXCIuL3F1ZXN0aW9uQXNrL3F1ZXN0aW9uQXNrLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUXVlc3Rpb25Bc2tlZENvbXBvbmVudCB9IGZyb20gXCIuL3F1ZXN0aW9uQXNrZWQvcXVlc3Rpb25Bc2tlZC5jb21wb25lbnRcIjtcblxuLy9wbGFjZSByb3V0ZXMgaW4gYWxwaGFiZXRpY2FsIG9yZGVyXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgIHBhdGhNYXRjaDogJ2Z1bGwnfSxcbiAgICB7cGF0aDogJ2Fib3V0JywgY29tcG9uZW50OiBBYm91dFNpdGV9LFxuICAgIHtwYXRoOiAncHJvZmlsZS1mZWVkJywgY29tcG9uZW50OiBQcm9maWxlRmVlZENvbXBvbmVudH0sXG4gICAge3BhdGg6ICdxdWVzdGlvbicsIGNvbXBvbmVudDogUXVlc3Rpb25Db21wb25lbnR9LFxuICAgIHtwYXRoOiAncXVlc3Rpb24vYXNrJywgY29tcG9uZW50OiBRdWVzdGlvbkFza0NvbXBvbmVudH0sXG4gICAge3BhdGg6ICdxdWVzdGlvbi9hc2tlZCcsIGNvbXBvbmVudDogUXVlc3Rpb25Bc2tlZENvbXBvbmVudH0sXG4gICAge3BhdGg6ICd2aWV3LXByb2ZpbGUnLCBjb21wb25lbnQ6IFZpc2l0ZWRQcm9maWxlQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJyoqJywgY29tcG9uZW50OiBQYWdlTm90Rm91bmRDb21wb25lbnR9XG5dO1xuXG5leHBvcnQgY29uc3QgYXBwUm91dGluZ1Byb3ZpZGVyczogYW55W10gPSBbXG5cbl07XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKTsiXX0=

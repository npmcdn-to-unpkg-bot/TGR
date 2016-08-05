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
var router_1 = require('@angular/router');
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var navigation_component_1 = require("./navigation/navigation.component");
var footer_component_1 = require("./footer/footer.component");
var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-app",
            templateUrl: "app.component.html",
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, forms_1.FORM_DIRECTIVES, footer_component_1.FooterComponent, navigation_component_1.NavigationComponent]
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEMsZUFBZSxDQUFDLENBQUE7QUFDMUQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsc0JBQThCLGdCQUFnQixDQUFDLENBQUE7QUFDL0MscUNBQWtDLG1DQUFtQyxDQUFDLENBQUE7QUFDdEUsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFRMUQ7SUFFSSxzQkFBbUIsZ0JBQWlDO1FBQ2hELGlGQUFpRjtRQUNqRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztJQVhMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFVBQVUsRUFBRSxDQUFFLDBCQUFpQixFQUFFLHdCQUFlLEVBQUUsdUJBQWUsRUFBRSxrQ0FBZSxFQUFFLDBDQUFtQixDQUFDO1NBQzNHLENBQUM7O29CQUFBO0lBT0YsbUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLG9CQUFZLGVBTXhCLENBQUEiLCJmaWxlIjoic3JjL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge05hdmlnYXRpb25Db21wb25lbnR9IGZyb20gXCIuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIGRpcmVjdGl2ZXM6IFsgUk9VVEVSX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBGb290ZXJDb21wb25lbnQsIE5hdmlnYXRpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgcHVibGljIHZpZXdDb250YWluZXJSZWYgOiBWaWV3Q29udGFpbmVyUmVmO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgLy8gWW91IG5lZWQgdGhpcyBzbWFsbCBoYWNrIGluIG9yZGVyIHRvIGNhdGNoIGFwcGxpY2F0aW9uIHJvb3QgdmlldyBjb250YWluZXIgcmVmXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZpZXdDb250YWluZXJSZWY7XG4gICAgfVxufVxuIl19

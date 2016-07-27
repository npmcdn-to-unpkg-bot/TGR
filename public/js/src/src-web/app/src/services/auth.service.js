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
/* ===== app/auth.service.ts ===== */
var core_1 = require('@angular/core');
var angular2_jwt_1 = require('angular2-jwt');
var Auth = (function () {
    function Auth() {
        // Configure Auth0
        this.lock = new Auth0Lock('4NeAd65FWaH7NxtDgIhkOdvhPqCuXn6P', 'pwborodich.auth0.com', {});
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
        });
    }
    Auth.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    ;
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    };
    ;
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
    ;
    Auth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Auth);
    return Auth;
}());
exports.Auth = Auth;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFxQztBQUNyQyxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsNkJBQWdDLGNBQWMsQ0FBQyxDQUFBO0FBTS9DO0lBSUk7UUFIQSxrQkFBa0I7UUFDbEIsU0FBSSxHQUFHLElBQUksU0FBUyxDQUFDLGtDQUFrQyxFQUFFLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBR2pGLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQyxVQUFVO1lBQ3JDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxvQkFBSyxHQUFaO1FBQ0ksOENBQThDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7SUFFTSw0QkFBYSxHQUFwQjtRQUNJLG9DQUFvQztRQUNwQyxtRUFBbUU7UUFDbkUsTUFBTSxDQUFDLDhCQUFlLEVBQUUsQ0FBQztJQUM3QixDQUFDOztJQUVNLHFCQUFNLEdBQWI7UUFDSSxpQ0FBaUM7UUFDakMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOztJQTFCTDtRQUFDLGlCQUFVLEVBQUU7O1lBQUE7SUEyQmIsV0FBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksWUFBSSxPQTBCaEIsQ0FBQSIsImZpbGUiOiJzcmMtd2ViL2FwcC9zcmMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT0gYXBwL2F1dGguc2VydmljZS50cyA9PT09PSAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b2tlbk5vdEV4cGlyZWQgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuXG4vLyBBdm9pZCBuYW1lIG5vdCBmb3VuZCB3YXJuaW5nc1xuZGVjbGFyZSB2YXIgQXV0aDBMb2NrOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoIHtcbiAgICAvLyBDb25maWd1cmUgQXV0aDBcbiAgICBsb2NrID0gbmV3IEF1dGgwTG9jaygnNE5lQWQ2NUZXYUg3Tnh0RGdJaGtPZHZoUHFDdVhuNlAnLCAncHdib3JvZGljaC5hdXRoMC5jb20nLCB7fSk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gQWRkIGNhbGxiYWNrIGZvciBsb2NrIGBhdXRoZW50aWNhdGVkYCBldmVudFxuICAgICAgICB0aGlzLmxvY2sub24oXCJhdXRoZW50aWNhdGVkXCIsIChhdXRoUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBhdXRoUmVzdWx0LmlkVG9rZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4oKSB7XG4gICAgICAgIC8vIENhbGwgdGhlIHNob3cgbWV0aG9kIHRvIGRpc3BsYXkgdGhlIHdpZGdldC5cbiAgICAgICAgdGhpcy5sb2NrLnNob3coKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGF1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlJ3MgYW4gdW5leHBpcmVkIEpXVFxuICAgICAgICAvLyBUaGlzIHNlYXJjaGVzIGZvciBhbiBpdGVtIGluIGxvY2FsU3RvcmFnZSB3aXRoIGtleSA9PSAnaWRfdG9rZW4nXG4gICAgICAgIHJldHVybiB0b2tlbk5vdEV4cGlyZWQoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGxvZ291dCgpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xuICAgIH07XG59Il19

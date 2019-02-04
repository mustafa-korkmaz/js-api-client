"use strict";
var CookieService = (function () {
    function CookieService() {
        var setting = new SettingsService();
        this.expireDays = setting.xhr.cookieExpireDays;
    }
    // Given a cookie key `name`, returns the value of
    // the cookie or ``, if the key is not found.
    CookieService.prototype.getCookie = function (name) {
        var nameLenPlus = (name.length + 1);
        return document.cookie
            .split(';')
            .map(function (c) { return c.trim(); })
            .filter(function (cookie) {
            return cookie.substring(0, nameLenPlus) === name + "=";
        })
            .map(function (cookie) {
            return decodeURIComponent(cookie.substring(nameLenPlus));
        })[0] || '';
    };
    CookieService.prototype.setCookie = function (name, value, expireDays, path) {
        if (path === void 0) { path = ''; }
        if (!expireDays) {
            expireDays = this.expireDays;
        }
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        var cpath = path ? "; path=" + path : '';
        document.cookie = name + "=" + value + "; " + expires + cpath;
    };
    CookieService.prototype.deleteCookie = function (name) {
        this.setCookie(name, '', -1);
    };
    return CookieService;
}());

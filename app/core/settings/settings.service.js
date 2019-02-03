"use strict";
var SettingsService = (function () {
    function SettingsService() {
        // xhr settings
        // ------------------------------------
        this.xhr = {
            apiBaseUrl: 'http://api.prudentialconnect.com/',
            contentType: 'application/json',
            channelType: '2',
            apiKey: '05e2cf47c23a461f6d64f0ac2d5eea33',
            cookieExpireDays: 730
        };
        // App Settings
        // -----------------------------------
        this.app = {
            name: 'Js client',
            description: 'My javascript http client application',
            year: ((new Date()).getFullYear()),
            siteUrl: 'abc.co',
            dummyImage: '/assets/img/dummy.png'
        };
        // table listing settings
        // ------------------------------------
        this.listing = {
            startIndex: 0,
            length: 10,
            maxLength: 999
        };
    }
    SettingsService.prototype.getAppSetting = function (name) {
        return name ? this.app[name] : this.app;
    };
    SettingsService.prototype.setAppSetting = function (name, value) {
        if (typeof this.app[name] !== 'undefined') {
            this.app[name] = value;
        }
    };
    return SettingsService;
}());

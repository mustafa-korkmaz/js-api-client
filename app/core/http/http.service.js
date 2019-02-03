"use strict";
var HttpService = (function () {
    function HttpService() {
        this.settingService = new SettingsService();
    }
    /**
     * jquery ajax get method
     * @param url request action url
     * @param onSuccess success action after getting 200 OK.
     * @param onFail fail action after getting http errors.
     */
    HttpService.prototype.get = function (url, onSuccess, onFail) {
        var requestUrl = this.settingService.xhr.apiBaseUrl + url;
        //todo: add on error.
        $.ajax({
            url: requestUrl,
            beforeSend: function (xhr) {
                console.log("before sending..");
            }
        })
            .done(function (data) {
            onSuccess(data);
        });
    };
    /**
    * jquery ajax post method
    * @param url request action url
    * @param onSuccess success action after getting 200 OK.
    * @param onFail fail action after getting http errors.
    */
    HttpService.prototype.post = function (url, jsonData, onSuccess, onFail) {
        var requestUrl = this.settingService.xhr.apiBaseUrl + url;
        //todo: add on error.
        $.ajax({
            url: requestUrl,
            headers: {
                'ChannelType': this.settingService.xhr.channelType,
                'Content-Type': this.settingService.xhr.contentType,
                'ApiKey': this.settingService.xhr.apiKey,
            },
            method: "POST",
            data: JSON.stringify(jsonData),
            beforeSend: function (xhr) {
                console.log("before sending..");
            }
        })
            .done(function (data) {
            onSuccess(data);
        });
    };
    return HttpService;
}());

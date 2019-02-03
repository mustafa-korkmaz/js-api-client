
class HttpService {
    settingService: SettingsService;

    constructor() {
        this.settingService = new SettingsService();
    }

    /**
     * jquery ajax get method
     * @param url request action url
     * @param onSuccess success action after getting 200 OK. 
     * @param onFail fail action after getting http errors.
     */
    get(url: String, onSuccess: any, onFail: any) {
        const requestUrl = this.settingService.xhr.apiBaseUrl + url;
        //todo: add on error.
        $.ajax({
            url: requestUrl,
            headers: {
                'ChannelType':this.settingService.xhr.channelType,
                'Content-Type':this.settingService.xhr.contentType,
                'ApiKey':this.settingService.xhr.apiKey,
            },
            beforeSend: function (xhr: any) {
                console.log("before sending..")
            }
        })
            .done(function (data: any) {
                onSuccess(data);
            });
    }

    /**
    * jquery ajax post method
    * @param url request action url
    * @param onSuccess success action after getting 200 OK. 
    * @param onFail fail action after getting http errors.
    */
    post(url: String, jsonData: any, onSuccess: any, onFail: any) {
        const requestUrl = this.settingService.xhr.apiBaseUrl + url;
        //todo: add on error.

        $.ajax({
            url: requestUrl,
            headers: {
                'ChannelType':this.settingService.xhr.channelType,
                'Content-Type':this.settingService.xhr.contentType,
                'ApiKey':this.settingService.xhr.apiKey,
            },
            method: "POST",
            data: JSON.stringify(jsonData),
            beforeSend: function (xhr: any) {
                console.log("before sending..")
            }
        })
            .done(function (data: any) {
                onSuccess(data);
            });
    }
}
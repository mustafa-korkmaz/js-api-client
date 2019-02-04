
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
                'ChannelType': this.settingService.xhr.channelType,
                'Content-Type': this.settingService.xhr.contentType,
                'ApiKey': this.settingService.xhr.apiKey,
                'Authorization': this.getAccessToken()
            },
            beforeSend: function (xhr: any) {
                console.log("sending get req..")
            }
        })
            .done(function (data: any) {
                onSuccess(data);
            })
            .fail(function (e) {
                console.error(e);
                onFail(e);
            });;
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
                'ChannelType': this.settingService.xhr.channelType,
                'Content-Type': this.settingService.xhr.contentType,
                'ApiKey': this.settingService.xhr.apiKey,
                'Authorization': this.getAccessToken()
            },
            method: "POST",
            data: JSON.stringify(jsonData),
            beforeSend: function (xhr: any) {
                console.log("sending post req..")
            }
        })
            .done(function (data: any) {
                onSuccess(data);
            })
            .fail(function (e) {
                console.error(e);
                onFail(e);
            });
    }

    private getAccessToken(): string {
        const cookieService = new CookieService();
        return "Bearer " + cookieService.getCookie("access_token");
    }
}
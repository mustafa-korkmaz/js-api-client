
class SettingsService {

    public user: any;
    public app: any;
    public layout: any;
    public xhr: any;
    public listing: any;

    constructor() {

        // xhr settings
        // ------------------------------------
        this.xhr = {
            apiBaseUrl: 'http://google.com/',
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

    getAppSetting(name: any) {
        return name ? this.app[name] : this.app;
    }

    setAppSetting(name: any, value: any) {
        if (typeof this.app[name] !== 'undefined') {
            this.app[name] = value;
        }
    }
}

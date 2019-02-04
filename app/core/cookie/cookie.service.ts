
class CookieService {

    private expireDays: number;

    constructor() {
        const setting = new SettingsService();
        this.expireDays = setting.xhr.cookieExpireDays;
    }

    // Given a cookie key `name`, returns the value of
    // the cookie or ``, if the key is not found.
    public getCookie(name: string): string {
        const nameLenPlus = (name.length + 1);
        return document.cookie
            .split(';')
            .map(c => c.trim())
            .filter(cookie => {
                return cookie.substring(0, nameLenPlus) === `${name}=`;
            })
            .map(cookie => {
                return decodeURIComponent(cookie.substring(nameLenPlus));
            })[0] || '';
    }

    public setCookie(name: string, value: string, expireDays?: number, path: string = '') {

        if (!expireDays) {
            expireDays = this.expireDays;
        }

        const d: Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        const expires = `expires=${d.toUTCString()}`;
        const cpath: string = path ? `; path=${path}` : '';

        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }

    public deleteCookie(name: string) {
        this.setCookie(name, '', -1);
    }
}
declare interface ICookiesOptions {
  'expires'?: Date | number | string;
  'secure'?: boolean;
  'httpOnly'?: boolean;
  'max-age'?: string | number
  'path'?: string;
  'domain'?: string;
}

class CookiesService {
  public get (name: string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  public set (name: string, value: string, options: ICookiesOptions = {}) {
    options = {
      path: '/',
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey as keyof ICookiesOptions];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

  public delete (name: string) {
    this.set(name, "", {
      'max-age': -1
    })
  }
}

const Cookies =  new CookiesService();

export default Cookies;
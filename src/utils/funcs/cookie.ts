type Cookie = string | undefined;

export const getCookie = (name: string): Cookie => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

type CookieOptions = {
  [key: string]: string | Date | boolean | number;
};

export const setCookie = (name: string, value: string, options: CookieOptions = {}): void => {

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
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
};


export const deleteCookie = (name: string): void => {
  setCookie(name, "", {
    'max-age': -1
  });
};
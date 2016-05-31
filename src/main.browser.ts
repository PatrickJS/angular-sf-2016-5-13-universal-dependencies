import 'angular2-universal/polyfills';

import {
  bootstrap,
  enableProdMode,
  BROWSER_ROUTER_PROVIDERS,
  BROWSER_HTTP_PROVIDERS
} from 'angular2-universal';

import {App} from './app/app.component';

import {BROWSER_STORE_PROVIDERS} from './universal-store/src/browser';


enableProdMode();


export function ngApp() {

  return bootstrap(App, [
    ...BROWSER_ROUTER_PROVIDERS,
    ...BROWSER_HTTP_PROVIDERS,

    ...BROWSER_STORE_PROVIDERS
  ]);
}








if (!getParameterByName('client')) {
  ngApp();
}













function getParameterByName(name, url?: string) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) { return null; }
  if (!results[2]) { return ''; }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

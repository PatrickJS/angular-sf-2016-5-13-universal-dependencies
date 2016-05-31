// Angular 2 Universal
import {
  enableProdMode,
  REQUEST_URL,
  ORIGIN_URL,
  BASE_URL,
  NODE_ROUTER_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  ExpressEngineConfig
} from 'angular2-universal';

// Application
import {App} from './app/app.component';
import {NODE_STORE_PROVIDERS} from './universal-store/src/node';

enableProdMode();

export function ngApp(req, res) {
// debugging only
  if (req.query.server === 'false') {
    return res.sendFile('/index.html', {root: __dirname});
  }
//

  let baseUrl = '/';
  let url = req.originalUrl || '/';
  let originUrl = 'http://localhost:3000';

  let config: ExpressEngineConfig = {
    directives: [ App ],
    platformProviders: [
      {provide: ORIGIN_URL, useValue: originUrl},
      {provide: BASE_URL, useValue: baseUrl},
    ],
    providers: [
      {provide: REQUEST_URL, useValue: url},
      ...NODE_ROUTER_PROVIDERS,
      ...NODE_HTTP_PROVIDERS,

      ...NODE_STORE_PROVIDERS

    ],
    async: true,
    preboot: false // { appRoot: 'app' } // your top level app component selector
  };

  res.render('index', config);
}

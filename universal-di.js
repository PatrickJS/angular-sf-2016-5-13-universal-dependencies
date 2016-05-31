// Pseudo Code

var BROWSER_PROVIDERS = [ Store => StoreBackend == BrowserBackend ];
var NODE_PROVIDERS = [ Store => StoreBackend == NodeStore ];


// entry files
BROWSER_PROVIDERS     NODE_PROVIDERS
      \                /
[main.browser]    [main.node]
          \       /
            \   /
        (universal app)
              |
             App
           /    \
       About    Home                    NodeBackend
                 |                     /
                Store ---> StoreBackend
                                       \
                                        BrowserBackend

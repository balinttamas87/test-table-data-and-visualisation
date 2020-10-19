if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
      workbox.core.skipWaiting();
  
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
  
      /* custom cache rules ( cache all assets )*/
       workbox.routing.registerRoute(
        new workbox.routing.NavigationRoute(
          new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'PRODUCTION-ASSETS',
          })
        )
      );

      const matchCallback = ({url, request, event}) => {
        return (url.href === 'http://localhost:5000/MOCK_DATA.json');
      };

      workbox.routing.registerRoute(matchCallback, new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'PRODUCTION-FETCH'
      }))
    } else {
      // console.log('Workbox could not be loaded. No Offline support');
    }
  }
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(x){d={t:'FantaTaccuino',b:e.data?e.data.text():''}}
  e.waitUntil(self.registration.showNotification(d.t||'FantaTaccuino',{body:d.b||'',icon:'icona-192.png',badge:'icona-192.png',tag:d.g||undefined,data:{u:d.u||'./'},vibrate:[120,60,120]}))});
self.addEventListener('notificationclick',e=>{e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c)return c.focus()}return self.clients.openWindow(e.notification.data.u)}))});

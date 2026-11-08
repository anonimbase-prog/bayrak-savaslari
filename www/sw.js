/* Ağ öncelikli: her zaman en yeni sürümü dener, internet yoksa önbellekten açar */
const C='bayrak-v73';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png']).catch(()=>{})))});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  const ks=await caches.keys();await Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)));
  await self.clients.claim();
})())});
self.addEventListener('message',e=>{if(e.data==='skipWaiting')self.skipWaiting()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith((async()=>{
    try{
      const net=await fetch(e.request,{cache:'no-store'});
      if(net&&net.ok&&new URL(e.request.url).origin===location.origin){
        const c=await caches.open(C);c.put(e.request,net.clone());
      }
      return net;
    }catch(err){
      const hit=await caches.match(e.request);
      if(hit)return hit;
      const idx=await caches.match('index.html');
      if(idx&&e.request.mode==='navigate')return idx;
      throw err;
    }
  })());
});


alert('jalan');

if ('ServiceWorker' in navigator) {

    navigator.ServiceWorker.getRegistrations().then(function(registration) {
        alert("Service Worker Registered");
        socket_messages();
    }).catch(function(err) {
        alert("Service Worker Failed to Register", err);
    })

    // navigator.ServiceWorker
    //     .register('service-worker.js', { scope: './' })
    //     .then(function(registration) {
    //         console.log("Service Worker Registered");
    //         socket_messages();
    //     })
    //     .catch(function(err) {
    //         console.log("Service Worker Failed to Register", err);
    //     })

}

self.addEventListener('fetch', function(event) {
    event.respondWith(
        // Check the caches.
        caches.match(event.request).then(function(response) {
            // If the response exists, return it; otherwise, fetch it from the network.
            alert('ok');
            return response || fetch(event.request);
        })
    );
});
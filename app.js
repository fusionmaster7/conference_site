if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker registered',reg))
        .catch((err) => console.log('servive worker cannot be registered',err))
}
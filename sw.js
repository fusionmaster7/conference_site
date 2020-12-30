// INSTALLING SERVICE WORKER

self.addEventListener('install',(e)=>{
    console.log('service worker has been installed')
})


// ACTIVATING SERVICE WORKER

self.addEventListener('activate',(e)=>{
    console.log('service worker has been activated')
})

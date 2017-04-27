console.log('Starting Worker')

self.addEventListener('message', (m) => {
    self.postMessage('arrayBuffer received')
})


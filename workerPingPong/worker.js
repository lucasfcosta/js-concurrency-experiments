console.log('Worker started')

self.addEventListener('message', (m) => {
    console.log(`[WORKER] Received: ${m.data}`)
    console.log('Sending pong...')
    self.postMessage('pong')
})

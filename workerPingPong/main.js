console.log('Master started')

const worker = new Worker('worker.js')

worker.addEventListener('message', (m) => {
    console.log(`[MASTER] Received: ${m.data}`)
    console.log('Sending ping in 5 seconds...')
    setTimeout(() => worker.postMessage('ping'), 5000)
})

console.log('Sending first ping...')
worker.postMessage('ping')

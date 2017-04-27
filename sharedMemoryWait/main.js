console.log('Starting Main')

const worker = new Worker('worker.js')
const length = 10;

const sharedBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * length)
const sharedArray = new Int32Array(sharedBuffer)

sharedArray[1] = 0

setTimeout(function() {
    console.log('[MASTER] Shared buffer sent.')
    worker.postMessage(sharedBuffer)
}, 2000)

setTimeout(function() {
    console.log('[MASTER] Change triggered.')
    Atomics.store(sharedArray, 1, 99)
    Atomics.wake(sharedArray, 1)
}, 5000)

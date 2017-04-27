console.log('Starting Main')

const worker = new Worker('worker.js')

const arrayBuffer = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 10)
arrayBuffer[0] = 99

console.log(`Length before transfering: ${arrayBuffer.byteLength}`)

// Add listener to check arrayBuffer after transfering it to worker
worker.addEventListener('message', (m) => {
    console.log(m.data)
    console.log(`Length after transfering: ${arrayBuffer.byteLength}`)
})

// Transfer arrayBuffer
worker.postMessage(arrayBuffer, [arrayBuffer])



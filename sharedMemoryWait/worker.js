console.log('Starting Worker')

self.addEventListener('message', (m) => {
    console.log('[WORKER] Message received!')

    const sharedArray = new Int32Array(m.data)

    console.log(sharedArray[1])

    console.log('[WORKER] Waiting for change in the shared array...')
    Atomics.wait(sharedArray, 1, 0)

    console.log('[WORKER] Change done!')
    console.log(sharedArray[1])
});

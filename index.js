function createStore() {
    // The Store should have four parts
    // 1. The state - to manage this state
    // 2. Get the state - to provide an API or a way to get the state
    // 3. Listen to the changes on the state
    // 4. Update the state

    let state
    let listeners = []

    // this function returns the existing state variable
    const getState = () => state

    // listens for change
    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    return {
        getState,
        subscribe
    }
}

const store = createStore()
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})

const unsubscribe = store.subscribe(() => {
    console.log('The store changed.')
})

unsubscribe();
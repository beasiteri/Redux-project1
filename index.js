// reducer function - takes in the current state and an action that occurred,
// and returns the new state of app 
function todos(state = [], action) {
    if(action.type === 'ADD_TODO') {
        return state.concat([state.todo])
    }
    return state
}

function createStore() {
    // The Store should have four parts
    // 1. The state - to manage this state
    // 2. Get the state - to provide an API or a way to get the state
    // 3. Listen to the changes on the state
    // 4. Update the state

    let state
    let listeners = []

    // get initial state - this function returns the existing state variable
    const getState = () => state

    // listens to changes on the state
    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    // update state of our store
    const dispatch = (action) => {
        state = todos(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
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
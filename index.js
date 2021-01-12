// LIBRARY CODE
function createStore(reducer) {
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
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}

// APP CODE
// reducer function - takes in the current state and an action that occurred,
// and returns the new state of app 
function todos (state = [], action) {
    switch(action.type) {
        case 'ADD_TODO' :
            return state.concat([action.todo])
        case 'REMOVE_TODO' :
            return state.filter((todo) => todo.id !== action.id)
        case 'TOGGLE_TODO' :
            return state.map((todo) => todo.id !== action.id ? todo :
                Object.assign({}, todo, { complete: !todo.complete }))
        default :
            return state
    }
}

function goals (state = [], action) {
    switch(action.type) {
        case 'ADD_GOAL' :
            return state.concat([action.goal])
        case 'REMOVE_GOAL' :
            return state.filter((goal) => goal.id !== action.id)
        default :
            return state
    }
}

const store = createStore(todos)

store.subscribe(() => {
    console.log('The new state is: ', store.getState())
}) 

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'LearnRedux',
        complete: false
    }
})
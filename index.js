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
// todos reducer
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

// goals reducer
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

// app - root reducer
function app (state = {}, action) {
    return {
      todos: todos(state.todos, action),
      goals: goals(state.goals, action),
    }
}

const store = createStore(app)

store.subscribe(() => {
    console.log('The new state is: ', store.getState())
}) 

store.dispatch({
    type: 'ADD_TODO',
    todo: {
      id: 0,
      name: 'Walk the dog',
      complete: false,
    }
  })
  
  store.dispatch({
    type: 'ADD_TODO',
    todo: {
      id: 1,
      name: 'Wash the car',
      complete: false,
    }
  })
  
  store.dispatch({
    type: 'ADD_TODO',
    todo: {
      id: 2,
      name: 'Go to the gym',
      complete: true,
    }
  })
  
  store.dispatch({
    type: 'REMOVE_TODO',
    id: 1
  })
  
  store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
  })
  
  store.dispatch({
    type: 'ADD_GOAL',
    goal: {
      id: 0,
      name: 'Learn Redux'
    }
  })
  
  store.dispatch({
    type: 'ADD_GOAL',
    goal: {
      id: 1,
      name: 'Lose 20 pounds'
    }
  })
  
  store.dispatch({
    type: 'REMOVE_GOAL',
    id: 0
  })
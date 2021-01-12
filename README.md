# Redux-project1

This is a Udacity Redux learning mini project.

## Managing State: 
We learn techniques to make the state more predictable 
by moving the state to a central location and establishing strict rules for:

* getting state
* listening state
* updating the state

This project contain the following functions:
* __createStore()__ - that returns a store object (must be passed a "reducer" function when invoked)
    *  __getState()__ - used to get the current state from the store
    * __subscribe()__ - used to provide a listener function the store will call when the state changes
    * __dispatch()__ - used to make changes to the store's state  


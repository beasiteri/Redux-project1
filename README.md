# Learn react and redux

This is a react-redux learning mini project based on Udacity React Nanodegree Program.

## About project
We learn techniques to make the state more predictable by moving the state to a central location and establishing strict rules for:
* getting state
* listening state
* updating the state

This project contain the following functions:
* __createStore()__ - that returns a store object (must be passed a "reducer" function when invoked)
    *  __getState()__ - used to get the current state from the store
    * __subscribe()__ - used to provide a listener function the store will call when the state changes
    * __dispatch()__ - used to make changes to the store's state  

The app handle adding, removing and toggling todo and goal items.

There are two reducers: __todo__ and __goal__

Whenever _dispatch_ is called, we invoke our _app_ function (the _roote_ reducer). The _app_ function will then invoke the _todos_ reducer as well as the _goals_ reducer. Those will return their specific portions of the state. And then, the _app_ function will return a state object with a todos property (the value of which is what the todos reducer returned) and a goals property (the value of which is what the goals reducer returned).

Finally, we added action creators to the store. 

There is no create-react-app implemented. It is a single index.html that contains all of the codes.

## Prerequisites
1). You will need Node.js and npm on your local environment to download and run this application. 
Visit https://nodejs.org to learn the specifics on downloading, installing and running Node.js. npm is packaged with Node.js.

2). You will need ReactJS on your local environment to download and run this application. 
Visit https://reactjs.org/ to learn the specifics on downloading, intalling and running ReactJS.

3). Clone the project to your local environment
### `git clone https://github.com/beasiteri/chirper-app.git`

4). Go to the cloned project
### `cd chirper-app`

5). Install dependencies
### `npm install`

6). Run the app in development mode
### `npm start`

A new browser window should automatically open displaying the app.  If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.
For reference, this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
